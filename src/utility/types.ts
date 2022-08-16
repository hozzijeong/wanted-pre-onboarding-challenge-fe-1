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

export interface ITodos {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFailAPIResult {
  details: string;
}

export interface ITodo {
  title: string | undefined;
  content: string | undefined;
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
