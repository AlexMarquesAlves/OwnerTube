import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { SearchFeed } from ".";

it("should render SearchFeed with text Hello", () => {
  render(<SearchFeed>Hello</SearchFeed>);

  const heading = screen.getByRole("heading", { name: /Hello/ });

  expect(heading).toBeInTheDocument();
  expect(heading).toMatchSnapshot();
});
