import React, { useState } from "react";

import { TodoListItem } from "../../molecules/TodoListItem/TodoListItem.tsx";

interface ITodoTask {
  description: string;
  isDone: boolean;
}

export function TodoList(): JSX.Element {
  const [todoTasks, setTodoTasks] = useState<ITodoTask[]>([]);

  return (
    <ol>
      <TodoListItem />
    </ol>
  );
}
