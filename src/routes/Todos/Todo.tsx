import { Suspense, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { todosAtom } from "atom";
import CreateTodo from "components/Todos/CreateTodo";
import TodoList from "components/Todos/TodoList";
import useGetToken from "hooks/useGetToken";
import useGetTodos from "hooks/useGetTodos";
import { splitPathName } from "utility/getPathName";
import { ITodos } from "utility/types";
import TodoDetail, { DefaultButton } from "./TodoDetail";
import Title from "components/Title";
import DetailSkeleton from "components/Utility/Loading/DetailSkeleton";

function Todos() {
  const navigation = useNavigate();
  const token = useGetToken();
  const [todos, setTodos] = useRecoilState<ITodos[]>(todosAtom);

  const { data } = useGetTodos();
  const location = useLocation();
  const id = splitPathName(location.pathname)[2];

  useEffect(() => {
    if (data) {
      if (data.details) throw console.error(data.details);
      else setTodos(data.data);
    }
  }, [data]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigation("/auth/login");
  };

  return (
    <div>
      <Title title="Tasks" size={"4.6rem"} />
      <DefaultButton onClick={logoutHandler}>로그아웃</DefaultButton>
      <CreateTodo token={token} />
      <hr />
      <TodoList todos={todos} />
      <Suspense fallback={<DetailSkeleton />}>{id && <TodoDetail />}</Suspense>
    </div>
  );
}

export default Todos;
