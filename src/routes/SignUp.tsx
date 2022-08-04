import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpAPI } from "../api/apis";
import { validateEmail, validatePassword } from "../utility/validation";

function SignUp() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  if (token) navigation("/");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeValue = (
    e: React.FormEvent<HTMLInputElement>,
    fnc: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const { value } = e.currentTarget;
    fnc(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SignUpAPI({ email, password }).then((data) => {
      if (data?.details) {
        alert(data.details);
      } else {
        alert(data.message);
        localStorage.setItem("token", data.token);
        navigation("/");
      }
    });
  };
  return (
    <>
      <h1>회원 가입</h1>
      <form method="post" onSubmit={(e) => onSubmit(e)}>
        <input
          type="email"
          value={email}
          onChange={(e) => changeValue(e, setEmail)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => changeValue(e, setPassword)}
        />
        <input
          type="submit"
          value="회원가입"
          disabled={!validateEmail(email) || !validatePassword(password)}
        />
      </form>
    </>
  );
}

export default SignUp;
