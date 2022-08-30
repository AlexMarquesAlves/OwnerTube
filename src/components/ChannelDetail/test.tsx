import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { ChannelDetail } from ".";

it("should render ChannelDetail with text Hello", () => {
  render(<ChannelDetail>Hello</ChannelDetail>);

  const heading = screen.getByRole("heading", { name: /Hello/ });

  expect(heading).toBeInTheDocument();
  expect(heading).toMatchSnapshot();
});
