import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from "./Header";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Header", () => {
  it("should render", () => {
    shallow(<Header title="Title" />);
  });
});
