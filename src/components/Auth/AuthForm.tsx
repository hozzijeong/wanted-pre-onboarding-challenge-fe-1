import { UseMutationResult } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { inputChangeHandler } from "../../utility/handler";
import { AuthResult, IAuth } from "../../utility/types";
import { validateEmail, validatePassword } from "../../utility/validation";
import Input, { ValueInput } from "../Utility/Input";

interface IForm {
  category: string;
  api: UseMutationResult<AuthResult, unknown, IAuth, unknown>;
}

const AuthContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  margin: 0 auto;
  justify-content: space-between;
`;

const SubmitInput = styled(ValueInput)`
  border: none;
  background-color: #bebebe;
  &:hover {
    cursor: pointer;
    background-color: #adadad;
  }
`;

function AuthForm({ category, api }: IForm) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const authSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api.mutate({ email, password });
  };

  return (
    <AuthContainer method="post" onSubmit={(e) => authSubmitHandler(e)}>
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
      <SubmitInput
        type="submit"
        value={category}
        disabled={!validateEmail(email) || !validatePassword(password)}
      />
    </AuthContainer>
  );
}

export default AuthForm;
