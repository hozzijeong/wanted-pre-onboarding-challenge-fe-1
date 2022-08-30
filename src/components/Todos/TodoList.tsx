import { todosAtom } from "atom";
import Title from "components/Title";
import useGetTodos from "hooks/useGetTodos";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ITodos } from "utility/types";
import TodoItem from "./TodoItem";

function TodoList() {
  const { data } = useGetTodos();
  const [todos, setTodos] = useRecoilState<ITodos[]>(todosAtom);

  useEffect(() => {
    if (data) {
      if (data.details) throw console.error(data.details);
      else setTodos(data.data);
    }
  }, [data]);

  return (
    <div>
      {data && (
        <div>
          <Title title="TodoList" size={"3.6rem"} />
          <ul>
            {[...todos.map((x: ITodos) => <TodoItem key={x.id} todo={x} />)]}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;
