import { useState } from "react";
import { inputChangeHandler } from "../utility/handler";
import { AuthResult, IAuth } from "../utility/types";
import { validateEmail, validatePassword } from "../utility/validation";
import Input from "./Input";

interface IForm {
  category: string;
  api: (body: IAuth) => Promise<AuthResult>;
  fetcher: (data: AuthResult) => void;
}

function AuthForm({ category, api, fetcher }: IForm) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const authSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await api({ email, password });
      fetcher(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form method="post" onSubmit={(e) => authSubmitHandler(e)}>
      <Input
        type="email"
        value={email}
        changeHandler={inputChangeHandler}
        fnc={setEmail}
      />
      <Input
        type="password"
        value={password}
        changeHandler={inputChangeHandler}
        fnc={setPassword}
      />
      <input
        type="submit"
        value={category}
        disabled={!validateEmail(email) || !validatePassword(password)}
      />
    </form>
  );
}

export default AuthForm;
