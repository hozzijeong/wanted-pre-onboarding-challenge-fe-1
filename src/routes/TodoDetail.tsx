import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { updateTodos } from "../api/apis";
import { detailAtom } from "../atom";
import { inputChangeHandler } from "../utility/handler";
import { ITodos } from "../utility/types";

function TodoDetail() {
  const location = useLocation();
  const state = location.state;
  const token = localStorage.getItem("token") as string;
  const [isUpdated, setIsUpdated] = useState(false);
  const [detail, setDetail] = useRecoilState<ITodos | null>(detailAtom);
  console.log(state);
  // 최초 render 되었을 대 detail 값이 undefined이고, 이에 따라 input에 설정되는 값이 undefined가 됨. 해당 값 변경을 해야 함.
  const [title, setTitle] = useState(detail?.title);
  const [content, setContent] = useState(detail?.content);

  useEffect(() => setIsUpdated(false), [detail]);

  const updateHandler = () => {
    if (isUpdated && detail) {
      updateTodos({ title, content }, token, detail.id)
        .then((data) => setDetail(data.data))
        .finally(() => setIsUpdated(false));
    } else setIsUpdated(true);
  };

  const cancleHandler = () => {
    setTitle(detail?.title);
    setContent(detail?.content);
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
            <span>{detail?.title}</span>
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
            <span>{detail?.content}</span>
          )}
        </label>
      </div>
    </div>
  ) : null;
}

export default TodoDetail;
