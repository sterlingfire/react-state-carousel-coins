import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Coin from "./Coin.js"


it("renders without error", function() {
  render(<Coin side="Heads" />);
});

it("matches snapshot", function() {
  const { container } = render(<Coin side="Heads"/>);
  expect(container).toMatchSnapshot();
});
