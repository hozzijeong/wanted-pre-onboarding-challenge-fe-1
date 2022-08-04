import { IAuth, ITodo } from "../utility/types";
const BASE_URL = "http://localhost:8080";

export function loginAPI(body: IAuth) {
  return fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function SignUpAPI(body: IAuth) {
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
      Authorization: token,
    },
    body: JSON.stringify(body),
  }).then((response) => response.json()); // create 하고 todos 업데이트 새로 할 것.
}

export function updateTodos(body: ITodo, token: string, id: string) {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
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
