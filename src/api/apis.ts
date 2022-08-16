import {
  AuthResult,
  DataResult,
  IAuth,
  ICreateTodos,
  IGetTodoInfo,
  ITodo,
} from "../utility/types";
const BASE_URL = "http://localhost:8080";

export function loginAPI(body: IAuth): Promise<AuthResult> {
  return fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function SignUpAPI(body: IAuth): Promise<AuthResult> {
  return fetch(`${BASE_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function getTodosAPI(token: string): Promise<Response> {
  return fetch(`${BASE_URL}/todos`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
}

export function getTodosDetail({
  token,
  id,
}: IGetTodoInfo): Promise<DataResult> {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  }).then((response) => response.json());
}

export function createTodos({
  body,
  token,
}: ICreateTodos): Promise<DataResult> {
  return fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function updateTodos(
  body: ITodo,
  token: string,
  id: string,
): Promise<DataResult> {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function deleteTodos({ id, token }: IGetTodoInfo): Promise<any> {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  }).then((response) => response.json());
}
