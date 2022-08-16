import { createTodos } from "./apis";
import { DataResult, ITodo } from "../utility/types";

interface ICreateTodos {
  body: ITodo;
  token: string;
}

export const getCreateTodos = async ({ body, token }: ICreateTodos) => {
  // let data;
  // try {
  //   data = await createTodos(body, token);
  // } catch (e) {
  //   console.error(e);
  // }
  // return data;
};
