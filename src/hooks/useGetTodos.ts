import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getTodosAPI } from "../api/apis";
import { ITodos } from "../utility/types";
import { checkToken } from "../utility/validation";

interface ITodosResult {
  data: ITodos[];
  details: string;
}

function useGetTodos() {
  const { token } = checkToken();
  const query = useQuery(["todos"], async (): Promise<ITodosResult> => {
    const response = await getTodosAPI(token);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  });

  useEffect(() => {
    if (query.error) throw console.error(query.error);
  }, [query.error]);

  return query?.data;
}

export default useGetTodos;
