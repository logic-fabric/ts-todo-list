import React from "react";

import styled from "styled-components";

import { ITodoTask } from "../../types/ITodoTask";

export function TodoListItem(props): JSX.Element {
  const { taskIndex, task, todoTasks, setTodoTasks } = props;

  const changeTaskStatus = (): void => {
    const newTodoTasks: ITodoTask[] = [...todoTasks];
    const changedTask = {
      ...newTodoTasks[taskIndex],
      isDone: !newTodoTasks[taskIndex].isDone,
    };

    newTodoTasks[taskIndex] = changedTask;

    setTodoTasks(newTodoTasks);
  };

  return (
    <ListItem isDone={task.isDone}>
      <TodoTask>
        <ToDoStatus>{task.isDone ? "DONE: " : "TO DO > "}</ToDoStatus>

        <TodoDescription isDone={task.isDone}>
          {task.description}
        </TodoDescription>
      </TodoTask>

      <button type="button" onClick={changeTaskStatus}>
        {task.isDone ? "Done" : "Undo"}
      </button>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 0.25rem;
  padding: 0.75rem;
  border-radius: 0.5rem;

  color: var(--primary-700);
  font-size: var(--txt-size);
  font-weight: 500;

  background: var(--primary-100);

  color: ${(props) =>
    props.isDone ? "var(--primary-500)" : "var(--primary-700)"};
`;

const TodoTask = styled.p`
  margin: 0.25rem 0;
  overflow: hidden;
`;

const ToDoStatus = styled.span`
  font-weight: 700;
`;

const TodoDescription = styled.span`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;
