import { useState } from "react";
import { getTodosAPI } from "../api/apis";
import { ITodos } from "../utility/types";

export async function useGetTodos(token: string) {
  let data: ITodos[] = [];
  try {
    const response = await getTodosAPI(token);
    data = response.data;
  } catch (e) {
    throw new Error();
  }
  return data;
}
