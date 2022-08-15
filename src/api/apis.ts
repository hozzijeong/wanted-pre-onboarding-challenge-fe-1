import { AuthResult, IAuth, ITodo } from "../utility/types";
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

export function getTodosAPI(token: string) {
  return fetch(`${BASE_URL}/todos`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  }).then((response) => response.json());
}

export function getTodosDetail(token: string, id: string) {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  }).then((response) => response.json());
}

export function createTodos(body: ITodo, token: string) {
  return fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function updateTodos(body: ITodo, token: string, id: string) {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function deleteTodos(token: string, id: string) {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  }).then((response) => response.json());
}
