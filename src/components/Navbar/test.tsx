import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Navbar } from ".";

it("should render Navbar with text Hello", () => {
  render(<Navbar>Hello</Navbar>);
  // renderTheme(<Heading>Heading</Heading>);
  const heading = screen.getByRole("heading", { name: /Hello/ });
  expect(heading).toBeInTheDocument();
  expect(heading).toMatchSnapshot();
});
