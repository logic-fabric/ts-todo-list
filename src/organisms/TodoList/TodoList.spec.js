import { render, screen } from "@testing-library/react";

import { TodoList } from "./TodoList";

const NEW_TASK_BUTTON_TEXT_CONTENT_REGEX = /add a new task/i;

describe("GIVEN a TodoList component", () => {
  test.skip("THEN it should contain a 'list' element", () => {
    render(<TodoList />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("THEN it should contain a 'listitem' with 'add a new task' in its content", () => {
    render(<TodoList />);

    expect(
      screen.getByText(NEW_TASK_BUTTON_TEXT_CONTENT_REGEX)
    ).toBeInTheDocument();
  });

  test("THEN it should contain a 'button' with 'add a new task' as textContent", () => {
    render(<TodoList />);

    const newTaskElement = screen.getByRole("button");

    expect(newTaskElement).toBeInTheDocument();
    expect(newTaskElement).toHaveTextContent(
      NEW_TASK_BUTTON_TEXT_CONTENT_REGEX
    );
  });
});
