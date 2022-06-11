import { render, screen } from "@testing-library/react";

import { TodoList } from "./TodoList";

describe("GIVEN a TodoList component", () => {
  test("THEN it should contain a 'list' element", () => {
    render(<TodoList />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("THEN it should contain a 'listitem' with 'add a new task' in its content", () => {
    render(<TodoList />);

    expect(screen.getByText(/add a new task/i)).toBeInTheDocument();
  });

  test("THEN it should contain a 'button' with 'add a new task' as textContent", () => {
    render(<TodoList />);

    const addNewTaskElement = screen.getByRole("button");

    expect(addNewTaskElement).toBeInTheDocument();
    expect(addNewTaskElement).toHaveTextContent(/add a new task/i);
  });
});
