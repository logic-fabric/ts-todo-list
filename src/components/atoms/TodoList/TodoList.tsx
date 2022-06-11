import { NewTaskButton } from "../NewTaskButton/NewTaskButton.tsx";

export function TodoList(): JSX.Element {
  return (
    <ol>
      <li>
        <NewTaskButton />
      </li>
    </ol>
  );
}
