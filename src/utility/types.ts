export interface AuthResult {
  message: string;
  token: string;

  details: string;
}

export interface DataResult {
  data: ITodos;
  details: string;
}

export interface GetTodosResult {
  data: ITodos[];
  details: string;
}

export interface ITodos extends ITodo {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFailAPIResult {
  details: string;
}

export interface ITodo {
  title: string;
  content: string;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface ICreateTodos {
  body: ITodo;
  token: string;
}

export interface IGetTodoInfo {
  id: string;
  token: string;
}

export interface IUpdateTodoParams extends IGetTodoInfo {
  body: ITodo;
}
