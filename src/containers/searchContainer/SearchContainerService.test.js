import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { sortService, searchService } from "./SearchContainerService";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("async actions", () => {
  it("creates SORT_MOVIES_SUCCESS with SORT_BY has been done", () => {
    const expectedActions = [
      { type: "SORT_MOVIES_SUCCESS", sort_by: "vote_average" }
    ];
    const store = mockStore({
      error: "",
      search_by: "title",
      sort_by: "release_date",
      query: undefined
    });
    store.dispatch(sortService("vote_average"));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates SEARCH_MOVIES_SUCCESS with SEARCH_BY has been done", () => {
    const expectedActions = [
      { type: "SEARCH_MOVIES_SUCCESS", search_by: "genres", query: "Family" }
    ];
    const store = mockStore({
      error: "",
      search_by: "title",
      sort_by: "release_date",
      query: undefined
    });
    store.dispatch(searchService("genres", "Family"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
