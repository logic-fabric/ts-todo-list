import { NewTaskButton } from "../../atoms/NewTaskButton/NewTaskButton.tsx";

export function TodoListItem(): JSX.Element {
  return (
    <li>
      <NewTaskButton />
    </li>
  );
}
