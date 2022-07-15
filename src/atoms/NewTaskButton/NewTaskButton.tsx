import React from "react";

import styled from "styled-components";

export function NewTaskButton(props): JSX.Element {
  const { canInputTask, onClick } = props;

  return (
    <TaskButton type={canInputTask ? "submit" : "button"} onClick={onClick}>
      {canInputTask ? "Add task" : "Add a new task"}
    </TaskButton>
  );
}

const TaskButton = styled.button`
  padding: 1rem 2rem;

  background: var(--tonic-700);

  &:hover {
    background: var(--tonic-500);
  }
`;
