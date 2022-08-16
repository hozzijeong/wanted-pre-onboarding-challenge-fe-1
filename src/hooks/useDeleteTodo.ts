import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "../atom";
import { splitPathName } from "../utility/getPathName";
import { IGetTodoInfo, ITodos } from "../utility/types";

interface IuseDeleteTodo {
  api: (params: IGetTodoInfo) => Promise<any>;
  todo: ITodos;
}

function useDeleteTodo({ api, todo }: IuseDeleteTodo) {
  const setTodos = useSetRecoilState(todosAtom);
  const location = useLocation();
  const navigation = useNavigate();

  const mutation = useMutation(api, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      const deleteId = splitPathName(location.pathname)[2];
      console.log(deleteId);
      setTodos((curTodos) => [...curTodos.filter((x) => x.id !== todo.id)]);
      if (deleteId === todo.id) navigation("/");
    },
  });

  return mutation;
}

export default useDeleteTodo;
