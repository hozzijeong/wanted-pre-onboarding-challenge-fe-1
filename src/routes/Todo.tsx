import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { todosAtom } from "../atom";
import CreateTodo from "../components/CreateTodo";
import TodoItem from "../components/TodoItem";
import useGetTodos from "../hooks/useGetTodos";
import { ITodos } from "../utility/types";
import { checkToken } from "../utility/validation";
import TodoDetail from "./TodoDetail";

function Todos() {
  const navigation = useNavigate();
  const token = checkToken();
  const [todos, setTodos] = useRecoilState<ITodos[]>(todosAtom);
  const getTodo = useGetTodos();

  useEffect(() => {
    if (getTodo) {
      if (getTodo?.details) throw console.error(getTodo.details);
      else setTodos(getTodo.data);
    }
  }, [getTodo]);

  useEffect(() => {
    if (!token.status) {
      alert("유효하지 않은 토큰입니다.");
      navigation("/auth/login");
    }
  }, [token.status]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigation("/auth/login");
  };

  return (
    <div>
      <h1>Tasks</h1>
      <button onClick={logoutHandler}>로그아웃</button>
      <CreateTodo token={token.token} />
      <hr />
      <div>
        <ul>
          {[
            ...todos.map((x: ITodos) => (
              <TodoItem key={x.id} todo={x} token={token.token} />
            )),
          ]}
        </ul>
      </div>
      <hr />
      <TodoDetail token={token.token} />
    </div>
  );
}

export default Todos;
