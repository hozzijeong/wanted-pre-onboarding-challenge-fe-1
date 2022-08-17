import { Link } from "react-router-dom";
import { deleteTodos } from "../api/apis";
import useDeleteTodo from "../hooks/useDeleteTodo";

import { ITodos } from "../utility/types";

interface ITodoItem {
  key: string;
  todo: ITodos;
  token: string | null;
}

function TodoItem({ todo, token }: ITodoItem) {
  const parmas = {
    api: deleteTodos,
    todo,
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
