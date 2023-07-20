import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";


//custom hook
export const useTodo = () => useContext(TodoContext);

