import React from "react";

import styled from "styled-components";

import { ITodoTask } from "../../types/ITodoTask";

export function TodoListItem(props): JSX.Element {
  const { taskIndex, task, todoTasks, setTodoTasks } = props;

  const changeTaskStatus = (): void => {
    const newTodoTasks: ITodoTask[] = [...todoTasks];
    const changedTask: ITodoTask = {
      ...newTodoTasks[taskIndex],
      isDone: !newTodoTasks[taskIndex].isDone,
    };

    newTodoTasks[taskIndex] = changedTask;

    setTodoTasks(newTodoTasks);
  };

  const removeTask = (): void => {
    const newTodoTasks: ITodoTask[] = [...todoTasks];
    newTodoTasks.splice(taskIndex, 1);

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

      <ActionButtons>
        <button type="button" onClick={changeTaskStatus}>
          {task.isDone ? "Done" : "Undo"}
        </button>

        <RemoveButton type="button" onClick={removeTask} />
      </ActionButtons>
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

const ActionButtons = styled.div`
  display: flex;
`;

const RemoveButton = styled.button`
  psoition: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  margin: 0 0 0 1rem;
  padding: 0;
  border-radius: 50%;

  color: white;

  background: var(--danger-500);

  &:hover {
    background: var(--danger-700);
  }

  &::after,
  &::before {
    position: absolute;

    width: 1.25rem;
    height: 1.25rem;
    border: 0rem solid transparent;
    border-top-color: white;
    border-top-width: 0.25rem;

    content: "";
  }

  &::after {
    transform: translate(-0.375rem, 0.375rem) rotate(45deg);
  }

  &::before {
    transform: translate(0.375rem, 0.375rem) rotate(-45deg);
  }
`;
