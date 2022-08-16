import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { detailAtom } from "../atom";
import { DataResult, IGetTodoInfo } from "../utility/types";

function useGetTodoDetail(api: (params: IGetTodoInfo) => Promise<DataResult>) {
  const navigation = useNavigate();
  const setDetail = useSetRecoilState(detailAtom);
  const mutation = useMutation(api, {
    onError: (error) => {},
    onSuccess: (response: DataResult) => {
      const { details, data } = response;
      if (details) navigation("/");
      else setDetail(data);
    },
  });

  return mutation;
}

export default useGetTodoDetail;
