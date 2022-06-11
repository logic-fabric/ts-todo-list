import { NewTaskButton } from "../NewTaskButton/NewTaskButton.tsx";

export function TodoList(): JSX.Element {
  return (
    <ul>
      <li>
        <NewTaskButton />
      </li>
    </ul>
  );
}
