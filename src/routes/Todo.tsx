import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getTodosAPI } from "../api/apis";
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
    if (token === null) navigation("/auth/login");
    else getTodosAPI(token).then((data) => setTodos(data.data));
  }, [token]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
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
