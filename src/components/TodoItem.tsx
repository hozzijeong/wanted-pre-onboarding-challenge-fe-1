import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteTodos } from "../api/apis";
import useGetToken from "../hooks/useGetToken";
import useDeleteTodo from "../hooks/useDeleteTodo";

import { ITodos } from "../utility/types";
import { splitPathName } from "../utility/getPathName";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "../atom";

interface ITodoItem {
  key: string;
  todo: ITodos;
}

function TodoItem({ todo }: ITodoItem) {
  const token = useGetToken();
  const navigation = useNavigate();
  const location = useLocation();
  const setTodos = useSetRecoilState(todosAtom);

  const options = {
    onSuccess: () => {
      const deleteId = splitPathName(location.pathname)[2];
      setTodos((curTodos) => [...curTodos.filter((x) => x.id !== todo.id)]);
      if (deleteId === todo.id) navigation("/");
    },
  };
  const parmas = {
    api: deleteTodos,
    options,
  };
  const mutation = useDeleteTodo(parmas);

  const deleteHandler = () => {
    if (typeof token === "string") {
      mutation.mutate({ id: todo.id, token });
    }
  };

  return (
    <li>
      <div>
        <span>{todo.title}</span>
        <button onClick={deleteHandler}>삭제하기</button>
        <Link to={`/details/${todo.id}`}>상세보기</Link>
      </div>
    </li>
  );
}

export default TodoItem;
