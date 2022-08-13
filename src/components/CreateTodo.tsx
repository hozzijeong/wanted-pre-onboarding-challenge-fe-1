import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { createTodos, getTodosAPI } from "../api/apis";
import { todosAtom } from "../atom";
import { useCreateTodos } from "../hooks/useCreateTodos";
import { useGetTodos } from "../hooks/useGetTodos";
import { inputChangeHandler } from "../utility/handler";
import { ITodos } from "../utility/types";

interface ICreateTodo {
  token: string | null;
}

function CreateTodo({ token }: ICreateTodo) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const setTodos = useSetRecoilState<ITodos[]>(todosAtom);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof token === "string") {
      const data = await createTodos({ title, content }, token);
      if (data?.details) {
        alert(data.details);
      } else {
        setTitle("");
        setContent("");
        setTodos((curVal) => [...curVal, data.data]);
      }
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={(e) => onSubmit(e)}>
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

        <input type="submit" value="추가하기" />
      </form>
    </div>
  );
}

export default CreateTodo;
