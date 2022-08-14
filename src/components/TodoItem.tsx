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

  const deleteItem = async () => {
    if (typeof token === "string") {
      try {
        const data = await deleteTodos(token, todo.id);
        if (data.data === null) {
          const deleteId = location.pathname.split("/")[2];
          setTodos((curTodos) => [
            ...curTodos.filter((todo) => todo.id !== deleteId),
          ]);
          if (deleteId === todo.id) navigation("/");
        }
      } catch (error) {
        console.error(error);
      }
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
