import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Todos() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    if (!token) navigation("/auth/login");
  }, [token]);

  return <div>todos</div>;
}

export default Todos;
