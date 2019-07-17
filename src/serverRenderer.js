import React from "react";
import { renderToString } from "react-dom/server";
import Root from "./pages/index";
import { StaticRouter } from "react-router-dom";
import configureStore from "./configureStore";

function renderHTML(html, preloadedState) {
  return `
      <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Webpack App</title>
            ${
              process.env.NODE_ENV === "development"
                ? ""
                : '<link href="/css/main.css" rel="stylesheet" type="text/css">'
            }
        </head>
        <body>
            <div id="div1">${html}</div>
            <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
              /</g,
              "\\u003c"
            )}
          </script>
            <script src="/js/main.js"></script>
        </body>
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const context = {};
    const renderRoot = () => (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    store.runSaga().done.then(() => {
      const htmlString = renderToString(renderRoot());
      if (context.url) {
        res.writeHead(302, {
          Location: context.url
        });
        res.end();
        return;
      }
      const preloadedState = store.getState();
      res.send(renderHTML(htmlString, preloadedState));
      
    });

    renderToString(renderRoot());
    store.close();
  };
}
