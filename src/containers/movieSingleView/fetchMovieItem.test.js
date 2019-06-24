import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import { fetchMovieItem } from "./fetchMovieItem";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_MOVIE_ITEM_SUCCESS when fetching movie item has been done", () => {
    fetchMock.getOnce(
      "https://reactjs-cdp.herokuapp.com/movies" + "/" + "320288",
      {}
    );

    const expectedActions = [{ type: "FETCH_MOVIE_ITEM_SUCCESS", movie: {} }];

    const store = mockStore({
      movies: [],
      error: "",
      movie: {}
    });

    return store.dispatch(fetchMovieItem()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
