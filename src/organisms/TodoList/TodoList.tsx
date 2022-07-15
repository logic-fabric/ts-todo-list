import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { AddTodoBar } from "../../molecules/AddTodoBar/AddTodoBar.tsx";
import { TodoListItem } from "../../molecules/TodoListItem/TodoListItem.tsx";

import { ITodoTask } from "../../types/ITodoTask";

export function TodoList(): JSX.Element {
  const [todoTasks, setTodoTasks] = useState<ITodoTask[]>([]);

  useEffect(() => {
    console.log({ todoTasks });
  }, [todoTasks]);

  return (
    <>
      <AddTodoBar todoTasks={todoTasks} setTodoTasks={setTodoTasks} />

      <TasksList>
        {todoTasks.map((task, index) => (
          <TodoListItem
            taskIndex={index}
            task={task}
            todoTasks={todoTasks}
            setTodoTasks={setTodoTasks}
            key={task.description.replace(" ", "-")}
          />
        ))}
      </TasksList>
    </>
  );
}

const TasksList = styled.ol`
  width: 100%;
`;
