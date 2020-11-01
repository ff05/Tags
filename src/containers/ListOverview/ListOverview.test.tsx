import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import ListOverview from "./ListOverview";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("ListOverview", () => {
  it("should render", () => {
    shallow(<ListOverview />);
  });
});
