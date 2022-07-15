import { render, screen } from "@testing-library/react";

import { HomePage } from "./HomePage";

const H1_TEXT_CONTENT_REGEX = /todo list|to do list/i;
const NEW_TASK_BUTTON_TEXT_CONTENT_REGEX = /add a new task/i;

describe("GIVEN a HomePage component", () => {
  test("THEN it should contain a 'main' element", () => {
    render(<HomePage />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("THEN it should contain a <h1> with 'todo list' OR 'to do list' in its content", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: H1_TEXT_CONTENT_REGEX, level: 1 })
    ).toBeInTheDocument();
  });

  test.skip("THEN it should contain a 'list' element", () => {
    render(<HomePage />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("THEN it should contain a 'button' with 'add a new task' as textContent", () => {
    render(<HomePage />);

    const newTaskElement = screen.getByRole("button");

    expect(newTaskElement).toBeInTheDocument();
    expect(newTaskElement).toHaveTextContent(
      NEW_TASK_BUTTON_TEXT_CONTENT_REGEX
    );
  });
});
