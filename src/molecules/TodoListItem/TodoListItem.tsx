import React, { useState } from "react";

import styled from "styled-components";

import { NewTaskButton } from "../../atoms/NewTaskButton/NewTaskButton.tsx";

type FormEvent = React.FormEvent<HTMLFormElement>;
type changeEvent = React.ChangeEvent<HTMLInputElement>;

export function TodoListItem(): JSX.Element {
  const [canInputTask, setCanInputTask] = useState<boolean>(false);
  const [textInputValue, setTextInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    setTextInputValue("");
    setCanInputTask(!canInputTask);
  };

  return (
    <ListItem>
      {canInputTask ? (
        <form onSubmit={handleSubmit}>
          <TextInput
            value={textInputValue}
            onChange={(e: changeEvent): void => {
              setTextInputValue(e.target.value);
            }}
          />

          <NewTaskButton canInputTask={canInputTask} />
        </form>
      ) : (
        <NewTaskButton
          canInputTask={canInputTask}
          onClick={(): void => setCanInputTask(!canInputTask)}
        />
      )}
    </ListItem>
  );
}

const ListItem = styled.li`
  padding: 0.75rem;
  border-radius: 0.5rem;

  background: var(--primary-100);

  transition: all 300ms;
`;

const TextInput = styled.input`
  margin: 0 1rem 0 0.125rem;
  padding: 0.75rem 0;
  border: 0 solid transparent;
  border-width: 0.25rem 0;
  border-bottom-color: var(--primary-500);
  overflow: hidden;

  color: var(--primary-700);
  font-size: var(--txt-size);
  font-weight: 500;

  background: var(--primary-100);
  outline: none;

  transition: all 300ms;

  &:focus {
    border-color: var(--primary-500);
  }
`;
