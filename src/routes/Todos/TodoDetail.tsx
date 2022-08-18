import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { updateTodos } from "api/apis";
import { detailAtom, todosAtom } from "atom";
import { DataResult, ITodos, IUpdateTodoParams } from "utility/types";
import useUpdateTodo from "hooks/useUpdateTodo";
import useGetTodoDetail from "hooks/useGetTodoDetail";
import { useLocation } from "react-router-dom";
import { splitPathName } from "utility/getPathName";
import useGetToken from "hooks/useGetToken";
import { initialResultData } from "utility/initialData";
import Title from "components/Title";
import UpdateLabel from "components/Todos/UpdateLabel";
import styled from "styled-components";

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
`;

export const DefaultButton = styled.button`
  border-radius: 1rem;
  outline: none;
  height: 4rem;
  margin: 1rem 0;
  font-size: 2.4rem;
  padding: 0 1rem;
`;

function TodoDetail() {
  const location = useLocation();
  const id = splitPathName(location.pathname)[2];
  const token = useGetToken();
  const options = {
    onSuccess: (response: DataResult) => updateData(response, setTodos),
    initialData: initialResultData,
  };
  const setTodos = useSetRecoilState(todosAtom);
  const { data } = useGetTodoDetail(id, token);
  const [isUpdateState, setIsUpdateState] = useState(false);
  const [detail, setDetail] = useRecoilState<ITodos | null>(detailAtom);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const updateMutation = useUpdateTodo(updateTodos, options);

  const updateData = (
    response: DataResult,
    fn?: (valOrUpdater: ITodos[] | ((currVal: ITodos[]) => ITodos[])) => void,
  ) => {
    const { details, data } = response;
    if (details) alert(details);
    else {
      if (fn)
        fn((curVal) => [...curVal].map((x) => (x.id === data.id ? data : x)));
      setDetail(data);
      setTitle(data.title);
      setContent(data.content);
    }
  };

  useEffect(() => {
    if (data) updateData(data);
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
      <Title title="상세 보기" size={"3.6rem"} />
      <LabelContainer>
        <UpdateLabel
          title={"Title"}
          state={isUpdateState}
          value={title}
          fnc={setTitle}
        />
        <UpdateLabel
          title={"Content"}
          state={isUpdateState}
          value={content}
          fnc={setContent}
        />
      </LabelContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <DefaultButton onClick={updateHandler}>
          {isUpdateState ? "제출하기" : "수정하기"}
        </DefaultButton>
        {isUpdateState ? (
          <DefaultButton onClick={() => cancleHandler(detail)}>
            취소하기
          </DefaultButton>
        ) : null}
      </div>
    </div>
  ) : null;
}

export default TodoDetail;
