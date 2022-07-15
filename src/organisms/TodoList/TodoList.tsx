import React, { useEffect, useState } from "react";

import { TodoListItem } from "../../molecules/TodoListItem/TodoListItem.tsx";

import { ITodoTask } from "../../types/ITodoTask";

export function TodoList(): JSX.Element {
  const [todoTasks, setTodoTasks] = useState<ITodoTask[]>([]);

  useEffect(() => {
    console.log({ todoTasks });
  }, [todoTasks]);

  return (
    <ol>
      <TodoListItem todoTasks={todoTasks} setTodoTasks={setTodoTasks} />
    </ol>
  );
}
