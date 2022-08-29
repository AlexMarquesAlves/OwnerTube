import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Navbar } from ".";

it("should render Navbar with text Hello YouTube", () => {
  render(<Navbar>Heading</Navbar>);
  // renderTheme(<Heading>Heading</Heading>);
  const heading = screen.getByRole("heading", { name: /Heading/ });
  expect(heading).toBeInTheDocument();
  expect(heading).toMatchSnapshot();
});
