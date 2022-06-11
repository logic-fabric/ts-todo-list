import { render, screen } from "@testing-library/react";

import { NewTaskButton } from "./NewTaskButton";

const NEW_TASK_BUTTON_TEXT_CONTENT_REGEX = /add a new task/i;

describe("GIVEN a NewTaskButton component", () => {
  test("THEN it should contain a 'button' element", () => {
    render(<NewTaskButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("THEN it should contain a 'button' with 'add a new task' as textContent", () => {
    render(<NewTaskButton />);

    const newTaskElement = screen.getByRole("button");

    expect(newTaskElement).toBeInTheDocument();
    expect(newTaskElement).toHaveTextContent(
      NEW_TASK_BUTTON_TEXT_CONTENT_REGEX
    );
  });
});
