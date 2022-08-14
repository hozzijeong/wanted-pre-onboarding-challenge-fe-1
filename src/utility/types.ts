export interface AuthResult {
  message: string;
  token: string;

  details: string;
}

export interface ITodos {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITodo {
  title: string | undefined;
  content: string | undefined;
}

export interface IAuth {
  email: string;
  password: string;
}
