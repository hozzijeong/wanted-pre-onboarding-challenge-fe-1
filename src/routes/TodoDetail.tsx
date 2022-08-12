import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { updateTodos } from "../api/apis";
import { detailAtom, todosAtom } from "../atom";
import { GetTodosHook } from "../hooks/GetTodosHook";
import { inputChangeHandler } from "../utility/handler";
import { ITodos } from "../utility/types";
import { checkStateNull } from "../utility/validation";

function TodoDetail() {
  const location = useLocation();
  const state = location.state as ITodos;
  const token = localStorage.getItem("token") as string;

  const setTodos = useSetRecoilState<ITodos[]>(todosAtom);
  const [isUpdated, setIsUpdated] = useState(false);
  const [detail, setDetail] = useRecoilState<ITodos | null>(detailAtom);
  const [title, setTitle] = useState(checkStateNull(state) ? "" : state.title);
  const [content, setContent] = useState(
    checkStateNull(state) ? "" : state.content,
  );

  useEffect(() => {
    setIsUpdated(false);
    setDetail(state);
    setTitle(checkStateNull(state) ? "" : state.title);
    setContent(checkStateNull(state) ? "" : state.content);
  }, [state]);

  const updateHandler = () => {
    if (isUpdated && detail) {
      updateTodos({ title, content }, token, detail.id)
        .then((data) => setDetail(data.data))
        .then(() => setTodos(GetTodosHook(token)))
        .finally(() => setIsUpdated(false));
    } else setIsUpdated(true);
  };

  const cancleHandler = () => {
    setTitle(state.title);
    setContent(state.content);
    setIsUpdated(false);
  };

  return detail !== null ? (
    <div>
      <h2>상세 보기</h2>
      <button onClick={updateHandler}>
        {isUpdated ? "제출하기" : "수정하기"}
      </button>
      {isUpdated ? <button onClick={cancleHandler}>취소하기</button> : null}
      <div>
        <label>
          Title:
          {isUpdated ? (
            <input
              value={title}
              onChange={(e) =>
                inputChangeHandler({
                  e,
                  fnc: setTitle as React.Dispatch<React.SetStateAction<string>>,
                })
              }
            />
          ) : (
            <span>{detail.title}</span>
          )}
        </label>
        <label>
          Content:
          {isUpdated ? (
            <input
              value={content}
              onChange={(e) =>
                inputChangeHandler({
                  e,
                  fnc: setContent as React.Dispatch<
                    React.SetStateAction<string>
                  >,
                })
              }
            />
          ) : (
            <span>{detail.content}</span>
          )}
        </label>
      </div>
    </div>
  ) : null;
}

export default TodoDetail;
