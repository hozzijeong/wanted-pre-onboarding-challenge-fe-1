import { atom } from "recoil";
import { ITodos } from "./utility/types";

export const todosAtom = atom<ITodos[]>({
  key: "todo",
  default: [],
});

export const detailAtom = atom<ITodos | null>({
  key: "detail",
  default: null,
});
