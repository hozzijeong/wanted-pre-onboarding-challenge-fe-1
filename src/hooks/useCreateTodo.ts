import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "../atom";
import { DataResult, ICreateTodos } from "../utility/types";

function useCreateTodo(api: (params: ICreateTodos) => Promise<DataResult>) {
  const setTodos = useSetRecoilState(todosAtom);

  const mutation = useMutation(api, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data: DataResult) => {
      if (data?.details) alert(data.details);
      else setTodos((curVal) => [...curVal, data.data]);
    },
  });

  return mutation;
}

export default useCreateTodo;
