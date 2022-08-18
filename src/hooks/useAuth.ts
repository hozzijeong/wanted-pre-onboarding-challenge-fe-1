import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { initialAuthData } from "../utility/initialData";
import { AuthResult, IAuth } from "../utility/types";

function useAuth(api: (body: IAuth) => Promise<AuthResult>) {
  const navigation = useNavigate();
  const options = {
    onSuccess: (data: AuthResult) => {
      if (data?.details) {
        alert(data.details);
      } else {
        alert(data.message);
        localStorage.setItem("token", data.token);
        navigation("/");
      }
    },
    initialData: initialAuthData,
  };
  const authMutation = useMutation(api, options);

  return authMutation;
}

export default useAuth;
