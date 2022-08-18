import { MutationOptions, useMutation } from "@tanstack/react-query";
import { DataResult, IGetTodoInfo } from "../utility/types";

interface IuseDeleteTodo {
  api: (params: IGetTodoInfo) => Promise<any>;
  options: MutationOptions<DataResult, unknown, IGetTodoInfo, unknown>;
}

function useDeleteTodo({ api, options }: IuseDeleteTodo) {
  return useMutation(api, options);
}

export default useDeleteTodo;
