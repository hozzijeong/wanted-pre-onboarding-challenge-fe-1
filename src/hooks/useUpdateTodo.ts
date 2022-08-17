import { MutationOptions, useMutation } from "@tanstack/react-query";
import { DataResult, IUpdateTodoParams } from "../utility/types";

function useUpdateTodo(
  api: (params: IUpdateTodoParams) => Promise<DataResult>,
  options: MutationOptions<DataResult, unknown, IUpdateTodoParams, unknown>,
) {
  const mutation = useMutation(api, options);

  return mutation;
}

export default useUpdateTodo;
