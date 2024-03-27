import * as React from "react";
import type { SayHelloHandler } from "../main/code";
import { emit } from "@create-figma-plugin/utilities";

export const App = () => {
  const handleClick = () => {
    emit<SayHelloHandler>("SAY_HELLO", "Hello, world!");
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Say Hello
      </button>
    </div>
  );
};
