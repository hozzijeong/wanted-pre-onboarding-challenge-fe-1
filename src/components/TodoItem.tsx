import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { deleteTodos, getTodosAPI } from "../api/apis";
import { todosAtom } from "../atom";
import { ITodos } from "../utility/types";

function TodoItem(todo: ITodos) {
  const token = localStorage.getItem("todo") as string;
  const setTodos = useSetRecoilState(todosAtom);

  const deleteItem = () => {
    deleteTodos(token, todo.id)
      .then((data) => {
        if (data.data === null)
          getTodosAPI(token).then((data) => setTodos(data.data));
      })
      .catch((e) => alert(e));
  };

  return (
    <li>
      <div>
        <span>{todo.title}</span>
        <button onClick={deleteItem}>삭제하기</button>
        <Link to={`/details/${todo.id}`} state={todo}>
          상세보기
        </Link>
      </div>
    </li>
  );
}

export default TodoItem;
