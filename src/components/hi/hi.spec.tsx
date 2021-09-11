import React from "react";
import { render, screen } from "@testing-library/react";
import Hi from "./Hi";

it("rendering", () => {
  render(<Hi />);
  const myElement = screen.getByText(/Hello World/);
  expect(myElement).toBeInTheDocument();
});
