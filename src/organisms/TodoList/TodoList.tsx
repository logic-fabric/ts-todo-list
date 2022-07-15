import React from "react";

import { TodoListItem } from "../../molecules/TodoListItem/TodoListItem.tsx";

export function TodoList(): JSX.Element {
  return (
    <ol>
      <TodoListItem />
    </ol>
  );
}
