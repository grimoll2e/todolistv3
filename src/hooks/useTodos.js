import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const useTodo = () => {
  const sharedObj = useContext(TodoContext);
  return sharedObj;
};
