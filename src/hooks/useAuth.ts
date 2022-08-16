import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "../atom";
import { AuthResult, IAuth } from "../utility/types";

function useAuth(api: (body: IAuth) => Promise<AuthResult>) {
  const navigation = useNavigate();

  const authMutation = useMutation(api, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data: AuthResult) => {
      if (data?.details) {
        alert(data.details);
      } else {
        alert(data.message);
        localStorage.setItem("token", data.token);
        navigation("/");
      }
    },
  });

  return authMutation;
}

export default useAuth;
