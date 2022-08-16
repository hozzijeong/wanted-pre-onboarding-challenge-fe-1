import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getTodosDetail, updateTodos } from "../api/apis";
import { detailAtom, todosAtom } from "../atom";
import Input from "../components/Input";
import { getTodoDetails } from "../api/getTodoDetails";
import { inputChangeHandler } from "../utility/handler";
import { ITodos } from "../utility/types";
import useGetTodoDetail from "../hooks/useGetTodoDetail";

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

  const state = useGetTodoDetail(getTodosDetail);
  useEffect(() => {
    if (typeof id === "string" && typeof token === "string") {
      state.mutate({ id, token });
      if (state.isSuccess) {
        const { details, data } = state.data;
        if (details) navigation("/");
        else {
          setDetail(data);
          setTitle(data.title);
          setContent(data.content);
        }
      }
    } else {
      setDetail(null);
      navigation("/");
    }
  }, [id]);

  const updateHandler = async () => {
    if (isUpdateState && detail && typeof token === "string") {
      try {
        const data = await updateTodos({ title, content }, token, detail.id);
        setDetail(data.data);
        setTodos((curVal) => [
          ...curVal.filter((x) => x.id !== data.data.id),
          data.data,
        ]);
      } catch (error) {
        throw error;
      } finally {
        setIsUpdateState(false);
      }
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
            <span>{detail.title}</span>
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
            <span>{detail.content}</span>
          )}
        </label>
      </div>
    </div>
  ) : null;
}

export default TodoDetail;
