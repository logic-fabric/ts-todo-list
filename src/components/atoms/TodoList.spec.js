import { render, screen } from "@testing-library/react";

import { TodoList } from "./TodoList";

describe("GIVEN a TodoList component", () => {
  test("THEN it should contain a 'list' element", () => {
    render(<TodoList />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
