import { atom } from "recoil";
import { ITodos } from "./utility/types";

export const todosAtom = atom<ITodos[]>({
  key: "todo",
  default: [],
});
