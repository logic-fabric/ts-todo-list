import React, { useEffect, useState } from "react";

import { AddTodoBar } from "../../molecules/AddTodoBar/AddTodoBar.tsx";

import { ITodoTask } from "../../types/ITodoTask";

export function TodoList(): JSX.Element {
  const [todoTasks, setTodoTasks] = useState<ITodoTask[]>([]);

  useEffect(() => {
    console.log({ todoTasks });
  }, [todoTasks]);

  return <AddTodoBar todoTasks={todoTasks} setTodoTasks={setTodoTasks} />;
}
