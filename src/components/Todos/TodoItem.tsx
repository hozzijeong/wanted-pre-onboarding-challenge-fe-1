import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteTodos } from "api/apis";
import useGetToken from "hooks/useGetToken";
import useDeleteTodo from "hooks/useDeleteTodo";

import { ITodos } from "utility/types";
import { splitPathName } from "utility/getPathName";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "atom";
import styled from "styled-components";

interface ITodoItem {
  key: string;
  todo: ITodos;
}

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 54rem;
`;

const ListTitle = styled.p`
  max-width: 36rem;
  font-size: 2.4rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`;

function TodoItem({ todo }: ITodoItem) {
  const token = useGetToken();
  const navigation = useNavigate();
  const location = useLocation();
  const setTodos = useSetRecoilState(todosAtom);

  const options = {
    onSuccess: () => {
      const deleteId = splitPathName(location.pathname)[2];
      setTodos((curTodos) => [...curTodos.filter((x) => x.id !== todo.id)]);
      if (deleteId === todo.id) navigation("/");
    },
  };
  const parmas = {
    api: deleteTodos,
    options,
  };
  const mutation = useDeleteTodo(parmas);

  const deleteHandler = () => {
    if (typeof token === "string") {
      mutation.mutate({ id: todo.id, token });
    }
  };

  return (
    <li>
      <ListContainer>
        <ListTitle>{todo.title}</ListTitle>
        <OptionContainer>
          <button onClick={deleteHandler}>삭제하기</button>
          <Link to={`/details/${todo.id}`}>상세보기</Link>
        </OptionContainer>
      </ListContainer>
      <hr />
    </li>
  );
}

export default TodoItem;
