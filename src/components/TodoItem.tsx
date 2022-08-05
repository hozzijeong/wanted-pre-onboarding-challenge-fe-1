import { Link } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { deleteTodos, getTodosAPI, getTodosDetail } from "../api/apis";
import { detailAtom, todosAtom } from "../atom";
import { ITodos } from "../utility/types";

function TodoItem(todo: ITodos) {
  // 삭제하기 클릭 시 컴포넌트 삭제
  const token = localStorage.getItem("todo") as string;
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

  const detailItem = () => {
    getTodosDetail(token, todo.id).then((data) => setDetails(data.data)); // 사실 API로 안얻고 그냥 여기서 값만 얻어도 됨
  };

  return (
    <li>
      <div>
        <span>{todo.title}</span>
        <button onClick={deleteItem}>삭제하기</button>
        <button onClick={detailItem}>상세보기</button>
      </div>
    </li>
  );
}

export default TodoItem;
