import { useQuery } from "@tanstack/react-query";
import { getTodosDetail } from "api/apis";
import { initialResultData } from "utility/initialData";

function useGetTodoDetail(id: string, token: string) {
  return useQuery(["todos", id], () => getTodosDetail({ token, id }), {
    initialData: initialResultData,
  });
}

export default useGetTodoDetail;
