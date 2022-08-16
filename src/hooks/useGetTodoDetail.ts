import { useMutation } from "@tanstack/react-query";
import { DataResult, IGetDetailTodo } from "../utility/types";

function useGetTodoDetail(
  api: (params: IGetDetailTodo) => Promise<DataResult>,
) {
  const mutation = useMutation(api, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data: DataResult) => {},
  });

  return mutation;
}

export default useGetTodoDetail;
