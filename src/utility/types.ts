export interface AuthResult {
  message: string;
  token: string;
}

export interface ITodos {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITodo {
  title: string;
  content: string;
}

export interface IAuth {
  email: string;
  password: string;
}
