import { deleteTodos } from "../api/apis";
import { ITodos } from "../utility/types";

function TodoItem(todo: ITodos) {
  // 삭제하기 클릭 시 컴포넌트 삭제
  const token = localStorage.getItem("todo");
  const deleteItem = () => {
    deleteTodos(token as string, todo.id)
      .then((data) => {})
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
