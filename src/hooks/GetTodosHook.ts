import { useState } from "react";
import { getTodosAPI } from "../api/apis";
import { ITodos } from "../utility/types";

export function GetTodosHook(token: string) {
  const [todo, setTodo] = useState<ITodos[]>([]);
  getTodosAPI(token).then((data) => setTodo(data));
  return todo;
}
