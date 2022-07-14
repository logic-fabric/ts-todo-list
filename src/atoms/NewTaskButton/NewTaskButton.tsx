export function NewTaskButton(props): JSX.Element {
  const { canInputTask, onClick } = props;

  return (
    <button type={canInputTask ? "submit" : "button"} onClick={onClick}>
      {canInputTask ? "Add task" : "Add a new task"}
    </button>
  );
}
