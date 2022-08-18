import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "api/apis";
import Form from "components/Auth/AuthForm";
import useAuth from "hooks/useAuth";
import useGetToken from "hooks/useGetToken";

function Login() {
  const navigation = useNavigate();
  const token = useGetToken();
  if (token) navigation("/");

  const useLogin = useAuth(loginAPI);

  return (
    <>
      <h1>로그인</h1>
      <Form category={"로그인"} api={useLogin} />
      <Link to={"/auth/signup"}>회원가입</Link>
    </>
  );
}

export default Login;
