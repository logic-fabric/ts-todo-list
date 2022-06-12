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

  describe("WHEN user clicks on 'add a new task' element", () => {
    test("THEN an 'add task' element is present", async () => {
      render(<NewTaskButton />);

      const newTaskElement = screen.getByText(ADD_NEW_TASK_REGEX);
      expect(newTaskElement).toBeInTheDocument();

      fireEvent.click(newTaskElement);

      const addTaskElement = screen.getByText(ADD_TASK_REGEX);
      expect(addTaskElement).toBeInTheDocument();
    });

    test("THEN there is no more 'add a new task' element", async () => {
      render(<NewTaskButton />);

      const newTaskElement = screen.getByText(ADD_NEW_TASK_REGEX);
      expect(newTaskElement).toBeInTheDocument();

      fireEvent.click(newTaskElement);

      expect(screen.queryByText(ADD_NEW_TASK_REGEX)).not.toBeInTheDocument();
    });
  });
});
