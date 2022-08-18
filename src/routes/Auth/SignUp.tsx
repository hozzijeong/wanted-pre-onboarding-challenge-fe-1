import { Link, useNavigate } from "react-router-dom";
import { SignUpAPI } from "api/apis";
import AuthForm from "components/Auth/AuthForm";
import useAuth from "hooks/useAuth";
import Title from "components/Title";
import AuthLink from "components/AuthLink";

function SignUp() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  if (token) navigation("/");

  const signUp = useAuth(SignUpAPI);

  return (
    <>
      <Title title={"회원가입"} size={"4.8rem"} />
      <AuthForm category={"회원가입"} api={signUp} />
      <Link to={"/auth/login"}>
        <AuthLink title={"로그인"} />
      </Link>
    </>
  );
}

export default SignUp;
