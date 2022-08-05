import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { deleteTodos, getTodosAPI, getTodosDetail } from "../api/apis";
import { detailAtom, todosAtom } from "../atom";
import { ITodos } from "../utility/types";

function TodoItem(todo: ITodos) {
  const token = localStorage.getItem("todo") as string;
  const navigation = useNavigate();
  const setTodos = useSetRecoilState(todosAtom);
  const setDetails = useSetRecoilState<ITodos | null>(detailAtom);

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
        <Link to={`/details/${todo.id}`} state={{ id: todo.id }}>
          상세보기
        </Link>
      </div>
    </li>
  );
}

export default TodoItem;
