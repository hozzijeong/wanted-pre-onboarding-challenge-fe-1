import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../api/apis";
import Form from "../components/AuthForm";
import { AuthResult } from "../utility/types";

function Login() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  if (token) navigation("/");

  const loginFetcher = (data: AuthResult) => {
    if (data?.details) {
      alert(data.details);
    } else {
      alert(data.message);
      localStorage.setItem("token", data.token);
      navigation("/");
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <Form category={"로그인"} api={loginAPI} fetcher={loginFetcher} />
      <Link to={"/auth/signup"}>회원가입</Link>
    </>
  );
}

export default Login;
