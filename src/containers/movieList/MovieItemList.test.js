import React from "react";
import { shallow, mount } from "enzyme";
import MovieItemList from "./MovieItemList";
import MovieItem from "../../shared/movieItem/MovieItem";

describe("List component", () => {
  it("should render components correctly", () => {
    const component = shallow(<MovieItemList />);
    expect(component).toMatchSnapshot();
  });

  it("should render all stub components - Item", () => {
    const component = mount(<MovieItemList />);
    expect(component.find(MovieItem).length).toBe(7);
  });
});
