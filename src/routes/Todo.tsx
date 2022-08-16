import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { todosAtom } from "../atom";
import CreateTodo from "../components/CreateTodo";
import TodoItem from "../components/TodoItem";
import useTokenStatus from "../hooks/useCheckToken";
import useGetTodos from "../hooks/useGetTodos";
import { ITodos } from "../utility/types";
import TodoDetail from "./TodoDetail";

function Todos() {
  const navigation = useNavigate();
  const token = useTokenStatus();
  const [todos, setTodos] = useRecoilState<ITodos[]>(todosAtom);
  const getTodo = useGetTodos();

  useEffect(() => {
    if (getTodo) {
      if (getTodo?.details) throw console.error(getTodo.details);
      else setTodos(getTodo.data);
    }
  }, [getTodo]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
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
