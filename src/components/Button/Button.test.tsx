import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  it("should render", () => {
    shallow(<Button>Hello</Button>);
  });

  it("should execute a function when clicked", () => {
    const mockCallback = jest.fn();

    const button = shallow(<Button onClick={() => mockCallback()}>Hello</Button>);
    button.simulate("click");
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
