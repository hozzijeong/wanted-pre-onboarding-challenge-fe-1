import { getTodosAPI } from "./apis";
import { ITodos } from "../utility/types";

interface ITodosResult {
  data: ITodos[];
  details: string;
}

export async function getTodos(token: string): Promise<ITodosResult> {
  let data;
  try {
    data = await getTodosAPI(token);
  } catch (e) {
    console.error(e);
  }
  return data;
}
