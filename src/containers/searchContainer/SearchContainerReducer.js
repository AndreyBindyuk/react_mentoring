import {
  SORT_MOVIES_SUCCESS,
  SORT_MOVIES_ERROR,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR
} from "./actionCreators";

const initialState = {
  error: "",
  search_by: "title",
  sort_by: "release_date",
  query: ""
};

export default function searchContainerReducer(state=initialState, action) {
  switch (action.type) {
    case SORT_MOVIES_SUCCESS:
      return { ...state, sort_by: action.sort_by };
      case SEARCH_MOVIES_SUCCESS:
      return { ...state, search_by: action.search_by };
    default:
      return state;
  }
}
