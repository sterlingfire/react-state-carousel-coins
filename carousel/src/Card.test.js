import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js"

const props = {caption:"Caption", src:"./image1.jpg", currNum:1, totalNum:1};

it("renders without error", function() {

  const { container } = render(<Card {...props} />);
});

// it("card test", function() {
//   const { queryByTestId, queryByAltText } = render(<Card {...props} />);

// });

it("matches snapshot", function() {
  const { container } = render(<Card {...props}/>);
  expect(container).toMatchSnapshot();
});
