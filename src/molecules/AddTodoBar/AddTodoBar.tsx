import React, { useState } from "react";

import styled from "styled-components";

import { NewTaskButton } from "../../atoms/NewTaskButton/NewTaskButton.tsx";

import { ITodoTask } from "../../types/ITodoTask";

type FormEvent = React.FormEvent<HTMLFormElement>;
type changeEvent = React.ChangeEvent<HTMLInputElement>;

export function AddTodoBar(props): JSX.Element {
  const { todoTasks, setTodoTasks } = props;

  const [canInputTask, setCanInputTask] = useState<boolean>(false);
  const [textInputValue, setTextInputValue] = useState<string>("");

  const addTodoTask = (description: string): void => {
    const newTodoTasks: ITodoTask[] = [
      ...todoTasks,
      { description: description, isDone: false },
    ];

    setTodoTasks(newTodoTasks);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (textInputValue !== "") {
      addTodoTask(textInputValue);
    }

    setTextInputValue("");
    setCanInputTask(!canInputTask);
  };

  return (
    <AddTodoBarContainer>
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
    </AddTodoBarContainer>
  );
}

const AddTodoBarContainer = styled.div`
  margin: 0.5rem 0;
  padding: 0.75rem;
  border-radius: 0.5rem;

  background: var(--tonic-100);

  transition: all 300ms;
`;

const TextInput = styled.input`
  margin: 0 1rem 0 0.125rem;
  padding: 0.75rem 0;
  border: 0 solid transparent;
  border-width: 0.25rem 0;
  border-bottom-color: var(--tonic-700);
  overflow: hidden;

  color: var(--tonic-700);
  font-size: var(--txt-size);
  font-weight: 500;

  background: var(--tonic-100);
  outline: none;

  transition: all 300ms;

  &:focus {
    border-color: var(--tonic-700);
  }
`;
