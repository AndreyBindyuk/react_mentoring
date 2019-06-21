import React from "react";
import { shallow } from "enzyme";
import { MovieItem } from "./MovieItem";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

function setup() {
  const movie = {
    title: jest.fn(),
    release_date: jest.fn(),
    genres: jest.fn(),
    poster_path: jest.fn()
  };
  const props = {
    movie: movie
  };
  const enzymeWrapper = shallow(<MovieItem {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("<MovieItem />", () => {
  it("should render components correctly", () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
