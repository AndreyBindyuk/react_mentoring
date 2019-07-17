import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from "./rootReducer";
import {moviesSaga} from "./containers/movieList/fetchMovieList"
import {movieItemSaga} from "./containers/movieSingleView/fetchMovieItem"
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    moviesSaga(),
    movieItemSaga()
  ]);
}

export default (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
};
