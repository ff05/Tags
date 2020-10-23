import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("App should render", () => {
  const { container } = render(<App />);
  const firstChild = container.firstChild as HTMLElement;
  expect(firstChild).toBeDefined();
});
