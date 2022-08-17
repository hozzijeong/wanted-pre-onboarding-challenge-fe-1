import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getTodosDetail, updateTodos } from "../api/apis";
import { detailAtom, todosAtom } from "../atom";
import Input from "../components/Input";
import { inputChangeHandler } from "../utility/handler";
import { ITodos, IUpdateTodoParams } from "../utility/types";
import useGetTodoDetail from "../hooks/useGetTodoDetail";
import useUpdateTodo from "../hooks/useUpdateTodo";

interface ITodoDetail {
  token?: string | null;
  data?: ITodos | undefined;
}

function TodoDetail({ token, data }: ITodoDetail) {
  const location = useLocation();
  const navigation = useNavigate();

  const [isUpdateState, setIsUpdateState] = useState(false);
  const [detail, setDetail] = useRecoilState<ITodos | null>(detailAtom);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (data) {
      setDetail(data);
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);

  const updateMutation = useUpdateTodo(updateTodos);
  // 비동기 처리가 아직 되지 않아서 이전 값이 나타남. 비동기 처리시 한꺼번에 처리되도록 설정하기.
  // onMount될 때 useEffect가 실행되는데, 그 전에 이루어졌으면 좋겠음. 비동기로.

  const updateHandler = async () => {
    if (isUpdateState && detail && typeof token === "string") {
      const params: IUpdateTodoParams = {
        id: detail.id,
        token,
        body: {
          title,
          content,
        },
      };
      updateMutation.mutate(params);

      setIsUpdateState(false);
    } else setIsUpdateState(true);
  };

  const cancleHandler = (detail: ITodos) => {
    setTitle(detail.title);
    setContent(detail.content);
    setIsUpdateState(false);
  };

  return detail !== null ? (
    <div>
      <h2>상세 보기</h2>
      <button onClick={updateHandler}>
        {isUpdateState ? "제출하기" : "수정하기"}
      </button>
      {isUpdateState ? (
        <button onClick={() => cancleHandler(detail)}>취소하기</button>
      ) : null}
      <div>
        <label>
          Title:
          {isUpdateState ? (
            <Input
              value={title}
              changeHandler={inputChangeHandler}
              fnc={setTitle}
            />
          ) : (
            <span>{title}</span>
          )}
        </label>
        <label>
          Content:
          {isUpdateState ? (
            <Input
              value={content}
              changeHandler={inputChangeHandler}
              fnc={setContent}
            />
          ) : (
            <span>{content}</span>
          )}
        </label>
      </div>
    </div>
  ) : null;
}

export default TodoDetail;
