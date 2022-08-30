import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { VideoDetail } from ".";

it("should render VideoDetail with text Hello", () => {
  render(<VideoDetail>Hello</VideoDetail>);

  const heading = screen.getByRole("heading", { name: /Hello/ });

  expect(heading).toBeInTheDocument();
  expect(heading).toMatchSnapshot();
});
