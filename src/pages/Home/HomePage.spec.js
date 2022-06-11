import { render, screen } from "@testing-library/react";

import { HomePage } from "./HomePage";

describe("GIVEN a HomePage component", () => {
  test("THEN it should render as a <main> HTMLElement", () => {
    render(<HomePage />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("THEN it should contains a <h1> HTMLElement containing 'todo list' or 'to do list' in its textContent", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /todo list|to do list/i, level: 1 })
    ).toBeInTheDocument();
  });
});
