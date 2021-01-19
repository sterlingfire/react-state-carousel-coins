import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";


it("renders without error", function() {
  const { container } = render(<Carousel />);
});

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});
it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  // move forward to #2
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);


  let img1Alt = queryByAltText("Photo by Richard Pasquarella on Unsplash");
  let img2Alt = queryByAltText("Photo by Pratik Patel on Unsplash");
  // expect the first image to show, but not the second
  expect(img1Alt).not.toBeInTheDocument();
  expect(img2Alt).toBeInTheDocument();

  // move forward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  img1Alt = queryByAltText("Photo by Richard Pasquarella on Unsplash");
  img2Alt = queryByAltText("Photo by Pratik Patel on Unsplash");
  // expect the second image to show, but not the first
  expect(img2Alt).not.toBeInTheDocument();
  expect(img1Alt).toBeInTheDocument();
});

it("matches snapshot", function() {
  const { container } = render(<Carousel />);
  expect(container).toMatchSnapshot();
});
