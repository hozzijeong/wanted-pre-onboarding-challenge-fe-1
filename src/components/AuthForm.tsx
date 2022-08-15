import { UseMutationResult } from "@tanstack/react-query";
import { useState } from "react";
import { inputChangeHandler } from "../utility/handler";
import { AuthResult, IAuth } from "../utility/types";
import { validateEmail, validatePassword } from "../utility/validation";
import Input from "./Input";

interface IForm {
  category: string;
  api: UseMutationResult<AuthResult, unknown, IAuth, unknown>;
  // fetcher: (data: AuthResult) => void;
}

function AuthForm({ category, api }: IForm) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api.mutate({ email, password });
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
