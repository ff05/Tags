import React from "react";
import { shallow } from "enzyme";
import ClickableTag from "./ClickableTag";

describe("ClickableTag", () => {
  it("should render", () => {
    shallow(<ClickableTag label="Tag" />);
  });
});
