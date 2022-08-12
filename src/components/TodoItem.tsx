import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { deleteTodos, getTodosAPI } from "../api/apis";
import { todosAtom } from "../atom";
import { ITodos } from "../utility/types";

interface ITodoItem {
  key: string;
  todo: ITodos;
  token: string | null;
}

function TodoItem({ todo, token }: ITodoItem) {
  const setTodos = useSetRecoilState(todosAtom);
  const location = useLocation();
  const navigation = useNavigate();

  const deleteItem = () => {
    if (typeof token === "string") {
      deleteTodos(token, todo.id)
        .then((data) => {
          if (data.data === null) {
            getTodosAPI(token).then((data) => setTodos(data.data));
            if (location.pathname.split("/")[2] === todo.id) {
              navigation("/");
            }
          }
        })
        .catch((e) => new Error(e));
    }
  };

  return (
    <li>
      <div>
        <span>{todo.title}</span>
        <button onClick={deleteItem}>삭제하기</button>
        <Link to={`/details/${todo.id}`}>상세보기</Link>
      </div>
    </li>
  );
}

export default TodoItem;
