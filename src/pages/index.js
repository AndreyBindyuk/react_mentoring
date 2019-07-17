import React from "react";
import "isomorphic-fetch";
import "babel-polyfill";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import App from "../App";
import MovieView from "../containers/movieView/MovieView";
import { Route, Switch, Redirect } from "react-router-dom";
import Page404 from "../Page404";
import { hot } from "react-hot-loader";
import "../App.css";

const Root = ({ Router, location, context, store }) => {
  return (
    <Router location={location} context={context}>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/search" component={App} />
          <Route path="/movie/:id" component={MovieView} />
          <Route path="*" component={Page404} />
          <Redirect to="/" />
        </Switch>
      </Provider>
    </Router>
  );
};

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string
  })
};
Root.defaultProps = {
  location: null,
  context: null
};

export default hot(module)(Root);
