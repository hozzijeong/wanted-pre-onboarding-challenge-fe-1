import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../api/apis";
import Form from "../components/AuthForm";

function Login() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  if (token) navigation("/");

  return (
    <>
      <h1>로그인</h1>
      <Form category={"로그인"} api={loginAPI} />
      <Link to={"/auth/signup"}>회원가입</Link>
    </>
  );
}

export default Login;
