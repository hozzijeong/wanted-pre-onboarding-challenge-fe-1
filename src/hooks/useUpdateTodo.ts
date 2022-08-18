import { MutationOptions, useMutation } from "@tanstack/react-query";
import { DataResult, IUpdateTodoParams } from "../utility/types";

function useUpdateTodo(
  api: (params: IUpdateTodoParams) => Promise<DataResult>,
  options: MutationOptions<DataResult, unknown, IUpdateTodoParams, unknown>,
) {
  return useMutation(api, options);
}

export default useUpdateTodo;
