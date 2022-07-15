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
    <ListItem>
      <Description>
        <ToDoStatus>{task.isDone ? "DONE: " : "TO DO > "}</ToDoStatus>

        {task.description}
      </Description>

      <DoUndoButton type="button" onClick={changeTaskStatus}>
        {task.isDone ? "Done" : "Undo"}
      </DoUndoButton>
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
`;

const ToDoStatus = styled.span`
  font-weight: 700;
`;

const Description = styled.p`
  margin: 0.25rem 0;
  overflow: hidden;
`;

const DoUndoButton = styled.button`
  padding: 0.25rem 2rem;
`;
