import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Route } from "react-router-dom";
import SingleList from "./SingleList";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("SingleList", () => {
  it("should render", () => {
    shallow(
      <Route path="/:id">
        <SingleList />
      </Route>
    );
  });
});
