import React from "react";
import { useNavigate } from "react-router-dom";
import { SignUpAPI } from "../api/apis";
import Form from "../components/Form";

function SignUp() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  if (token) navigation("/");

  return (
    <>
      <h1>회원 가입</h1>
      <Form category={"회원가입"} api={SignUpAPI} />
    </>
  );
}

export default SignUp;
