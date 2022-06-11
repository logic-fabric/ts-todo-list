import { render, screen } from "@testing-library/react";

import { HomePage } from "./HomePage";

describe("GIVEN a HomePage component", () => {
  test("THEN it should contain a 'main' element", () => {
    render(<HomePage />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("THEN it should contain a <h1> with 'todo list' OR 'to do list' in its content", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /todo list|to do list/i, level: 1 })
    ).toBeInTheDocument();
  });

  test("THEN it should contain a 'list' element", () => {
    render(<HomePage />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
