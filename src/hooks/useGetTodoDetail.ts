import { useQuery } from "@tanstack/react-query";
import { getTodosDetail } from "../api/apis";

function useGetTodoDetail(id: string, token: string) {
  return useQuery(["todos", id], () => getTodosDetail({ token, id }));
}

export default useGetTodoDetail;
