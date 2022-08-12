import { useState } from "react";
import { getTodosAPI } from "../api/apis";
import { ITodos } from "../utility/types";

export function useGetTodosHook(token: string) {
  const [todos, setTodos] = useState<ITodos[]>([]);
  getTodosAPI(token).then((data) => setTodos(data.data));
  return todos;
}
