import { fireEvent, render, screen } from "@testing-library/react";

import { NewTaskButton } from "./NewTaskButton";

const ADD_NEW_TASK_REGEX = /add a new task/i;
const ADD_TASK_REGEX = /add task/i;

describe("GIVEN a NewTaskButton component", () => {
  test("THEN it should contain a 'button' element", () => {
    render(<NewTaskButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("THEN it should contain a 'button' with 'add a new task' as textContent", () => {
    render(<NewTaskButton />);

    const newTaskElement = screen.getByRole("button");

    expect(newTaskElement).toBeInTheDocument();
    expect(newTaskElement).toHaveTextContent(ADD_NEW_TASK_REGEX);
  });
});
