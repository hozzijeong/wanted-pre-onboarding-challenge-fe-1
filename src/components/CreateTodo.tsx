import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { createTodos, getTodosAPI } from "../api/apis";
import { todosAtom } from "../atom";
import { inputChangeHandler } from "../utility/handler";
import { ITodos } from "../utility/types";

interface ICreateTodo {
  token: string | null;
}

function CreateTodo({ token }: ICreateTodo) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const setTodos = useSetRecoilState<ITodos[]>(todosAtom);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (typeof token === "string") {
      createTodos({ title, content }, token).then((data) => {
        if (data?.details) {
          alert(data.details);
        } else {
          setTitle("");
          setContent("");
          getTodosAPI(token).then((data) => setTodos(data));
        }
      });
    }
  };
  return (
    <div>
      <h2>Add Task</h2>

      <input
        style={{ width: "98%" }}
        type="text"
        placeholder="type title"
        value={title}
        onChange={(e) => inputChangeHandler({ e, fnc: setTitle })}
      />

      <textarea
        style={{ height: "100%", width: "98%" }}
        value={content}
        onChange={(e) => inputChangeHandler({ e, fnc: setContent })}
      ></textarea>

      <button onClick={(e) => onSubmit(e)}>추가하기</button>
    </div>
  );
}

export default CreateTodo;
