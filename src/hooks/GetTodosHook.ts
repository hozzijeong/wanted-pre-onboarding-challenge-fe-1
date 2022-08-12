import { useState } from "react";
import { getTodosAPI } from "../api/apis";
import { ITodos } from "../utility/types";

export function GetTodosHook(token: string) {
  let todo: ITodos[] = [];
  getTodosAPI(token).then((data) => (todo = data));
  return todo;
}
