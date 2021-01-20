import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CoinFlipper from "./CoinFlipper";
import {SIDE_TO_URL} from "./Coin";

beforeEach(function() {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

afterEach(function() {
  Math.random.mockRestore();
});


it("renders without error", function() {
  render(<CoinFlipper />);
});

it("matches snapshot", function() {
  const { container } = render(<CoinFlipper />);
  expect(container).toMatchSnapshot();
});

it("works when you click on the button", function() {
  const { container, debug } = render(<CoinFlipper />);

  const flipButton = container.querySelector(".CoinFlipper-button");
  fireEvent.click(flipButton);

  const tailsImg = container.querySelector("img");
  debug(container.querySelector("p"));
  const tailsCaption = container.querySelector("p").innerHTML;

  // expect the first coin to be tails
  expect(tailsCaption).toEqual("Out of 1 flips, there have been 0 heads, and 1 tails.u");
  expect(tailsImg.getAttribute("src")).toEqual(SIDE_TO_URL["Tails"]);

  fireEvent.click(flipButton);

  const headsImg = container.querySelector("img");
  const headsCaption = container.querySelector("p").innerHTML;

  // expect the first coin to be tails
  expect(headsCaption).toEqual("Out of 2 flips, there have been 1 heads, and 1 tails.");
  expect(headsImg.getAttribute("src")).toEqual(SIDE_TO_URL["Heads"]);
});
