import { useQuery } from "@tanstack/react-query";
import { getTodosAPI } from "api/apis";
import { initialTodosData } from "utility/initialData";
import { ITodos } from "utility/types";
import useGetToken from "./useGetToken";

interface ITodosResult {
  data: ITodos[];
  details: string;
}

function useGetTodos() {
  const token = useGetToken();

  return useQuery(
    ["todos", "all"],
    async (): Promise<ITodosResult> => {
      const response = await getTodosAPI(token);
      return response.json();
    },
    { suspense: true },
  );
}

export default useGetTodos;
