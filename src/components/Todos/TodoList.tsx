import { todosAtom } from "atom";
import Title from "components/Title";
import DetailSkeleton from "components/Utility/Loading/DetailSkeleton";
import useGetTodos from "hooks/useGetTodos";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import TodoDetail from "routes/Todos/TodoDetail";
import { splitPathName } from "utility/getPathName";
import { ITodos } from "utility/types";
import TodoItem from "./TodoItem";

function TodoList() {
  const location = useLocation();
  const { data } = useGetTodos();
  const [todos, setTodos] = useRecoilState<ITodos[]>(todosAtom);
  const id = splitPathName(location.pathname)[2];

  useEffect(() => {
    if (data) {
      if (data.details) throw console.error(data.details);
      else setTodos(data.data);
    }
  }, [data]);

  return (
    <div>
      {data && (
        <>
          <div>
            <Title title="TodoList" size={"3.6rem"} />
            <ul>
              {[...todos.map((x: ITodos) => <TodoItem key={x.id} todo={x} />)]}
            </ul>
          </div>
          <Suspense fallback={<DetailSkeleton />}>
            {id && <TodoDetail />}
          </Suspense>
        </>
      )}
    </div>
  );
}

export default TodoList;
