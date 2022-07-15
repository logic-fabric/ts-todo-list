import React from "react";
import styled from "styled-components";

import { TodoList } from "../../organisms/TodoList/TodoList.tsx";

export function HomePage(): JSX.Element {
  return (
    <main>
      <MainTitle>React/TypeScript TODO List</MainTitle>

      <TodoList />
    </main>
  );
}

const MainTitle = styled.h1`
  text-align: center;
`;
