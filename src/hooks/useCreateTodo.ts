import { MutationOptions, useMutation } from "@tanstack/react-query";
import { DataResult, ICreateTodos } from "utility/types";

function useCreateTodo(
  api: (params: ICreateTodos) => Promise<DataResult>,
  options: MutationOptions<DataResult, unknown, ICreateTodos, unknown>,
) {
  const mutation = useMutation(api, options);

  return mutation;
}

export default useCreateTodo;
