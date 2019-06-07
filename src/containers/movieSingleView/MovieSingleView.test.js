import React from "react";
import { shallow, mount } from "enzyme";
import MovieSingleView from "./MovieSingleView";

describe("<MovieSingleView />", () => {
  it("should render components correctly", () => {
    const component = shallow(<MovieSingleView />);
    expect(component).toMatchSnapshot();
  });
});
