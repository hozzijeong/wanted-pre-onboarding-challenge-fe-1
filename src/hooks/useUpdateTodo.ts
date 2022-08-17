import { QueryClient, useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { getTodosAPI } from "../api/apis";
import { detailAtom, todosAtom } from "../atom";
import { DataResult, IUpdateTodoParams } from "../utility/types";

function useUpdateTodo(
  api: (params: IUpdateTodoParams) => Promise<DataResult>,
) {
  const setTodos = useSetRecoilState(todosAtom);
  const setDetail = useSetRecoilState(detailAtom);
  const queryClient = new QueryClient();

  const mutation = useMutation(api, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (response: DataResult) => {
      const { details, data } = response;
      if (details) alert(details);
      else {
        setTodos((curVal) =>
          [...curVal].map((x) => (x.id === data.id ? data : x)),
        );
        setDetail(data);
        queryClient.invalidateQueries();
      }
    },
  });

  return mutation;
}

export default useUpdateTodo;
