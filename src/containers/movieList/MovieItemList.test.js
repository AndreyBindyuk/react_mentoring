import React from "react";
import ReactDOM from "react-dom";
import { shallow,mount } from "enzyme";
import { MovieItemList } from "./MovieItemList";
import MovieItem from "../../shared/movieItem/MovieItem";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import MovieStub from "../../MovieStub.json";

const mockStore = configureMockStore();
const store = mockStore({});

function setup() {
  const props = {
    sorting: "release_date",
    searching: "title",
    query: "",
    movieList: MovieStub ,
    fetchMovies: jest.fn()
  };
  const enzymeWrapper = shallow(<MovieItemList {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("List component", () => {
  it("should render components correctly", () => {
    const { enzymeWrapper, props } = setup();
    expect(
      enzymeWrapper
    ).toMatchSnapshot();
  });

  it("should render all stub components - Item", () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper.find(MovieItem).length).toBe(7);
  });
});

describe('componentDidUpdate', () => {
  it('calls fetchMovies', () => { 
    const { enzymeWrapper, props } = setup();
    props.sorting = "vote_average";
    enzymeWrapper.instance().componentDidUpdate(props);
    expect(props.fetchMovies).toHaveBeenCalled();
  })

  it('calls fetchMovies', () => { 
    const { enzymeWrapper, props } = setup();
    props.query = "DENIS SUKA!";
    enzymeWrapper.instance().componentDidUpdate(props);
    expect(props.fetchMovies).toHaveBeenCalled();
  })
})
