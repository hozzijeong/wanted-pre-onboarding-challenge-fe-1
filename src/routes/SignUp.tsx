import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpAPI } from "../api/apis";
import Form from "../components/AuthForm";
import { AuthResult } from "../utility/types";

function SignUp() {
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
      <h1>회원 가입</h1>
      <Form category={"회원가입"} api={SignUpAPI} fetcher={loginFetcher} />
      <Link to={"/auth/login"}>로그인</Link>
    </>
  );
}

export default SignUp;
