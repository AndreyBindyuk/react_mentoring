import { SORT_MOVIES_SUCCESS, SEARCH_MOVIES_SUCCESS } from "./actionCreators";

const initialState = {
  loading: false,
  error: "",
  search_by: "title",
  sort_by: "release_date",
  query: undefined
};

export default function searchContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SORT_MOVIES_SUCCESS:
      return { ...state, sort_by: action.sort_by };
    case SEARCH_MOVIES_SUCCESS:
      return { ...state, search_by: action.search_by, query: action.query };
    default:
      return state;
  }
}
