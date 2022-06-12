import { useState } from "react";

export function NewTaskButton(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? "Add task" : "Add a new task"}
    </button>
  );
}
