import { TodoListItem } from "../../molecules/TodoListItem/TodoListItem";

export function TodoList(): JSX.Element {
  return (
    <ol>
      <TodoListItem />
    </ol>
  );
}
