import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { fetchMovieItemSuccess, fetchMovieItemError, FETCH_MOVIE_ITEM } from './actionCreators';
import { ProxyURL } from '../../ProxyURL';


export function* fetchMovieItem(action) {
  const response = yield call(fetch, (`${ProxyURL}/${action.id}`));
  const movie = yield response.json();
  yield put(fetchMovieItemSuccess(movie));
}

export const fetchItem = id => ({
  type: FETCH_MOVIE_ITEM,
  id,
});


export function* watchFetchMovieItem() {
  yield takeLatest(FETCH_MOVIE_ITEM, fetchMovieItem);
}

export function* movieItemSaga() {
  yield all([watchFetchMovieItem()]);
}
