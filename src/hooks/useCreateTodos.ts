import { createTodos } from "../api/apis";
import { ITodo } from "../utility/types";

export const useCreateTodos = async (body: ITodo, token: string) => {
  let setTodo = {};

  try {
    const response = await createTodos(body, token);
    setTodo = response.data;
  } catch (e) {
    console.error(e);
  }

  return setTodo;
};
