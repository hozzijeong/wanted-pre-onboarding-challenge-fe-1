import { useSetRecoilState } from "recoil";
import { deleteTodos, getTodosAPI } from "../api/apis";
import { todosAtom } from "../atom";
import { ITodos } from "../utility/types";

function TodoItem(todo: ITodos) {
  // 삭제하기 클릭 시 컴포넌트 삭제
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
        <button>수정하기</button>
      </div>
    </li>
  );
}

export default TodoItem;
