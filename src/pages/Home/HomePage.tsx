import { TodoList } from "../../components/atoms/TodoList/TodoList.tsx";

export function HomePage(): JSX.Element {
  return (
    <main>
      <h1>TODO List</h1>

      <TodoList />
    </main>
  );
}
