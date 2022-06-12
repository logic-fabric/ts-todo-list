import { render, screen } from "@testing-library/react";

import { TodoListItem } from "./TodoListItem";

describe("GIVEN a TodoListitem component", () => {
  test("THEN it should contain a 'listitem' element", () => {
    render(<TodoListItem />);

    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  test("THEN it should contain a unique 'button' element", () => {
    render(<TodoListItem />);

    expect(screen.getByRole("button")).toBeInTheDocument();

    expect(screen.getAllByRole("button").length).toBe(1);
  });

  test("THEN it should contain a 'button' with 'add new task' or 'add task' ass textContent", () => {
    render(<TodoListItem />);

    const taskButton = screen.getByRole("button");

    expect(taskButton).toBeInTheDocument();
    expect(taskButton).toHaveTextContent(/add a new task|add task/i);
  });
});
