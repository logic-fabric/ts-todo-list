import { useState } from "react";

import { NewTaskButton } from "../../atoms/NewTaskButton/NewTaskButton.tsx";

export function TodoListItem(): JSX.Element {
  const [canInputTask, setCanInputTask] = useState(false);

  return (
    <li>
      {canInputTask && <input type="text" />}

      <NewTaskButton 
        canInputTask={canInputTask}
        onClick={(): void => setCanInputTask(!canInputTask)}
      />
    </li>
  );
}
