import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { detailAtom } from "../atom";
import { ITodos } from "../utility/types";

function TodoDetail() {
  const [detail, setDetail] = useRecoilState<ITodos | null>(detailAtom);
  return <div>{detail !== null ? detail.title : null}</div>;
}

export default TodoDetail;
