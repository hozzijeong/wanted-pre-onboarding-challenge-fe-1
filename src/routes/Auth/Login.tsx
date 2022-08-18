import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "api/apis";
import Form from "components/Auth/AuthForm";
import useAuth from "hooks/useAuth";
import useGetToken from "hooks/useGetToken";
import Title from "components/Title";
import AuthLink from "components/AuthLink";

function Login() {
  const navigation = useNavigate();
  const token = useGetToken();
  if (token) navigation("/");

  const useLogin = useAuth(loginAPI);

  return (
    <div>
      <Title title={"로그인"} size={"4.8rem"} />
      <Form category={"로그인"} api={useLogin} />
      <Link to={"/auth/signup"}>
        <AuthLink title={"회원가입"} />
      </Link>
    </div>
  );
}

export default Login;
