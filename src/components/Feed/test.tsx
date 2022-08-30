import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Feed } from ".";

it("should render Feed with text Hello", () => {
  render(<Feed>Hello</Feed>);

  const heading = screen.getByRole("heading", { name: /Hello/ });

  expect(heading).toBeInTheDocument();
  expect(heading).toMatchSnapshot();
});
