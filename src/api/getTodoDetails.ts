import { getTodosDetail } from "./apis";
import { DataResult } from "../utility/types";

interface IGetDetails {
  token: string;
  id: string;
}

export const getTodoDetails = async ({
  token,
  id,
}: IGetDetails): Promise<DataResult> => {
  let data;
  try {
    data = await getTodosDetail(token, id);
  } catch (error) {
    console.error(error);
  }
  return data;
};
