import { Link, useNavigate } from "react-router-dom";
import { SignUpAPI } from "api/apis";
import AuthForm from "components/Auth/AuthForm";
import useAuth from "hooks/useAuth";

function SignUp() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  if (token) navigation("/");

  const signUp = useAuth(SignUpAPI);

  return (
    <>
      <h1>회원 가입</h1>
      <AuthForm category={"회원가입"} api={signUp} />
      <Link to={"/auth/login"}>로그인</Link>
    </>
  );
}

export default SignUp;
