import React from "react";
import { shallow, error } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

function Exception() {
  return null;
}

describe("<ErrorBoundary />", () => {
  it("updates state correctly", () => {
    const result = ErrorBoundary.getDerivedStateFromError(error);
    expect(result).toEqual({
      hasError: true
    });
  });

  it("renders warning in case of error", () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <Exception />
      </ErrorBoundary>
    );
    wrapper.setState({ hasError: true });
    expect(wrapper.html()).toEqual("<h2>" + "Some errors occurred" + "</h2>");
  });
  

});
