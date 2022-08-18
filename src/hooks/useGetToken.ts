import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ITokenStatus {
  status: boolean;
  token: string;
}

function useGetToken() {
  let data: ITokenStatus;
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  if (typeof token !== "string") data = { status: false, token: "" };
  else data = { status: true, token };

  useEffect(() => {
    if (!data.status) navigation("/auth/login");
  }, [data.status, navigation]);

  return data.token;
}

export default useGetToken;
