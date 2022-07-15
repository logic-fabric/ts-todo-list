import React from "react";

import styled from "styled-components";

export function TodoListItem(props): JSX.Element {
  const { todoTask } = props;

  return (
    <ListItem>
      <Description>{todoTask.description}</Description>
    </ListItem>
  );
}

const ListItem = styled.li`
  width: 100%;
  margin: 0.25rem;
  padding: 0.75rem;
  border-radius: 0.5rem;

  background: var(--primary-100);
`;

const Description = styled.p`
  margin: 0;
  overflow: hidden;

  color: var(--primary-700);
  font-size: var(--txt-size);
  font-weight: 500;

  background: var(--primary-100);
`;
