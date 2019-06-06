import React from "react";
import { shallow, mount } from "enzyme";
import SearchContainer from "./SearchContainer";

describe("<SearchContainer />", () => {
  it("should render components correctly", () => {
    const component = shallow(<SearchContainer />);
    expect(component).toMatchSnapshot();
  });

  it("should be call toggleTitleColor", () => {
    const component = shallow(<SearchContainer />);
    component.instance().toggleTitleColor = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const mockedEvent = { target: {} };
    component.find("button#btn_genre").simulate("click", mockedEvent);
    expect(component.instance().toggleTitleColor).toHaveBeenCalled();
  });

  it("search_by /genre/ parameter shoud be changed", () => {
    const component = mount(<SearchContainer />);
    component.instance().toggleTitleColor = jest.fn();
    const mockedEvent = { target: { id: "btn_genre" } };
    component.find("button#btn_genre").simulate("click", mockedEvent);
    expect(component.state().search_by).toEqual("genre");
  });

  it("search_by /title/ parameter shoud be changed", () => {
    const component = mount(<SearchContainer />);
    component.setState({ search_by: "genre" });
    const mockedEvent = { target: { id: "btn_title" } };
    component.find("button#btn_title").simulate("click", mockedEvent);
    expect(component.state().search_by).toEqual("title");
  });

  it("sort_by /rating/ parameter shoud be changed", () => {
    const component = mount(<SearchContainer />);
    component.instance().toggleRatingColor = jest.fn();
    const mockedEvent = { target: { id: "btn_rating" } };
    component.find("button#btn_rating").simulate("click", mockedEvent);
    expect(component.state().sort_by).toEqual("rating");
  });

  it("sort_by /release/ parameter shoud be changed", () => {
    const component = mount(<SearchContainer />);
    component.setState({ sort_by: "rating" });
    const mockedEvent = { target: { id: "btn_release" } };
    component.find("button#btn_release").simulate("click", mockedEvent);
    expect(component.state().sort_by).toEqual("release");
  });
});
