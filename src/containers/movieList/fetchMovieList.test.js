import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import { fetchMovieList } from "./fetchMovieList";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_MOVIE_LIST_SUCCESS when fetching movie list with SORT_BY has been done", () => {
    fetchMock.getOnce(
      "https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&sortOrder=desc",
      { data: ["test", "test1"] }
    );

    const expectedActions = [
      { type: "FETCH_MOVIE_LIST_SUCCESS", movies: ["test", "test1"] }
    ];

    const store = mockStore({
      movies: [],
      error: "",
      movie: {}
    });

    return store
      .dispatch(fetchMovieList("vote_average", null, null))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("creates FETCH_MOVIE_LIST_SUCCESS when fetching movie list with SEARCH_BY has been done", () => {
    fetchMock.getOnce(
      "https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&sortOrder=desc&search=Family&searchBy=genres",
      { data: ["test", "test1"] }
    );

    const expectedActions = [
      { type: "FETCH_MOVIE_LIST_SUCCESS", movies: ["test", "test1"] }
    ];

    const store = mockStore({
      movies: [],
      error: "",
      movie: {}
    });

    return store
      .dispatch(fetchMovieList("vote_average", "genres", "Family"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
