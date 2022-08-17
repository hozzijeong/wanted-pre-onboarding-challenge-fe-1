import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { updateTodos } from "../api/apis";
import { detailAtom } from "../atom";
import Input from "../components/Input";
import { inputChangeHandler } from "../utility/handler";
import { ITodos, IUpdateTodoParams } from "../utility/types";
import useUpdateTodo from "../hooks/useUpdateTodo";

interface ITodoDetail {
  token?: string | null;
  data?: ITodos | undefined;
}

function TodoDetail({ token, data }: ITodoDetail) {
  const [isUpdateState, setIsUpdateState] = useState(false);
  const [detail, setDetail] = useRecoilState<ITodos | null>(detailAtom);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const updateMutation = useUpdateTodo(updateTodos);

  useEffect(() => {
    if (data) {
      setDetail(data);
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);

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
