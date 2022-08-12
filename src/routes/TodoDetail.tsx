import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getTodosAPI, getTodosDetail, updateTodos } from "../api/apis";
import { detailAtom, todosAtom } from "../atom";
import { inputChangeHandler } from "../utility/handler";
import { ITodos } from "../utility/types";

interface ITodoDetail {
  token?: string | null;
}

function TodoDetail({ token }: ITodoDetail) {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigation = useNavigate();

  const setTodos = useSetRecoilState<ITodos[]>(todosAtom);
  const [isUpdateState, setIsUpdateState] = useState(false);
  const [detail, setDetail] = useRecoilState<ITodos | null>(detailAtom);
  const [title, setTitle] = useState(detail === null ? "" : detail.title);
  const [content, setContent] = useState(detail === null ? "" : detail.content);

  useEffect(() => {
    if (typeof id === "string" && typeof token === "string") {
      getTodosDetail(token, id)
        .then((data) => {
          if (data?.detail) navigation("/");
          setDetail(data.data);
          setTitle(data.data.title);
          setContent(data.data.content);
        })
        .catch((e) => new Error(e));
    } else {
      setDetail(null);
    }
  }, [id]);

  useEffect(() => {
    if (detail === undefined || detail === null) navigation("/");
  }, [detail]);

  const updateHandler = () => {
    if (isUpdateState && detail && typeof token === "string") {
      updateTodos({ title, content }, token, detail.id)
        .then((data) => setDetail(data.data))
        .then(() => getTodosAPI(token).then((data) => setTodos(data.data)))
        .finally(() => setIsUpdateState(false));
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
            <input
              value={title}
              onChange={(e) =>
                inputChangeHandler({
                  e,
                  fnc: setTitle,
                })
              }
            />
          ) : (
            <span>{detail.title}</span>
          )}
        </label>
        <label>
          Content:
          {isUpdateState ? (
            <input
              value={content}
              onChange={(e) =>
                inputChangeHandler({
                  e,
                  fnc: setContent,
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
