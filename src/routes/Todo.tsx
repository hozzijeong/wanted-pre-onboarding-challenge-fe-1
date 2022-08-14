import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getTodosAPI } from "../api/apis";
import { getTodos } from "../api/getTodos";
import { todosAtom } from "../atom";
import CreateTodo from "../components/CreateTodo";
import TodoItem from "../components/TodoItem";
import { ITodos } from "../utility/types";
import TodoDetail from "./TodoDetail";

function Todos() {
  const navigation = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [todos, setTodos] = useRecoilState<ITodos[]>(todosAtom);

  useEffect(() => {
    if (typeof token === "string") {
      const data = getTodos(token);
      data.then((response) => {
        if (response?.details) alert(response.details);
        else setTodos(response.data);
      });
    } else navigation("/auth/login");
  }, [token]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigation("/auth/login");
  };

  return (
    <div>
      <h1>Tasks</h1>
      <button onClick={logoutHandler}>로그아웃</button>
      <CreateTodo token={token} />
      <hr />
      <div>
        <ul>
          {[
            ...todos.map((x: ITodos) => (
              <TodoItem key={x.id} todo={x} token={token} />
            )),
          ]}
        </ul>
      </div>
      <hr />
      <TodoDetail token={token} />
    </div>
  );
}

export default Todos;
