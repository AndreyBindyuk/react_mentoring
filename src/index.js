import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import rootReducer from './rootReducer';
import App from './App';
import { MovieSingleView } from './containers/movieSingleView/MovieSingleView';
import MovieView from './containers/movieView/MovieView';
import Page404 from './Page404';

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('div1');
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={App} />
        <Route path="/movie/:id" component={MovieView} />
        <Route path="*" component={Page404} />
      </Switch>
    </Provider>
  </Router>,
  rootElement,
);
