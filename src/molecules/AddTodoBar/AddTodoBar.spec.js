import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { AddTodoBar } from "./AddTodoBar";

const ADD_NEW_TASK_REGEX = /add a new task/i;
const ADD_TASK_REGEX = /add task/i;

describe("GIVEN a AddTodoBar component", () => {
  test("THEN it should NOT contain a form", () => {
    render(<AddTodoBar />);

    expect(screen.queryByRole("form")).not.toBeInTheDocument();
  });

  test("THEN it should contain a unique 'button' element", () => {
    render(<AddTodoBar />);

    expect(screen.getByRole("button")).toBeInTheDocument();

    expect(screen.getAllByRole("button").length).toBe(1);
  });

  test("THEN it should contain a 'button' with 'add a new task' as textContent", () => {
    render(<AddTodoBar />);

    const taskButton = screen.getByRole("button");

    expect(taskButton).toBeInTheDocument();
    expect(taskButton).toHaveTextContent(ADD_NEW_TASK_REGEX);
  });

  test("THEN it should NOT contain a 'textbox' element", () => {
    render(<AddTodoBar />);

    expect(screen.queryAllByRole("textbox").length).toBe(0);
  });

  describe("WHEN user clicks on 'add a new task' element", () => {
    test("THEN it should contain a form", () => {
      render(<AddTodoBar />);

      const newTaskElement = screen.getByText(ADD_NEW_TASK_REGEX);
      fireEvent.click(newTaskElement);

      waitForElementToBeRemoved(newTaskElement).then(() =>
        expect(screen.getByRole("form")).toBeInTheDocument()
      );
    });

    test("THEN an 'add task' element is present", async () => {
      render(<AddTodoBar />);

      const newTaskElement = screen.getByText(ADD_NEW_TASK_REGEX);
      fireEvent.click(newTaskElement);

      expect(screen.getByText(ADD_TASK_REGEX)).toBeInTheDocument();
    });

    test("THEN the 'add a new task' element is NO MORE present", () => {
      render(<AddTodoBar />);

      const newTaskElement = screen.getByText(ADD_NEW_TASK_REGEX);
      fireEvent.click(newTaskElement);

      expect(screen.queryByText(ADD_NEW_TASK_REGEX)).not.toBeInTheDocument();
    });

    test("THEN it should contain a unique 'textbox' element", () => {
      render(<AddTodoBar />);

      const newTaskElement = screen.getByText(ADD_NEW_TASK_REGEX);
      fireEvent.click(newTaskElement);

      expect(screen.getAllByRole("textbox").length).toBe(1);
    });
  });
});
