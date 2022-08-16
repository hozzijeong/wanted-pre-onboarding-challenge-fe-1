import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "../atom";
import { getCreateTodos } from "../api/getCreateTodos";
import { inputChangeHandler } from "../utility/handler";
import { ITodos } from "../utility/types";
import useCreateTodo from "../hooks/useCreateTodo";
import { createTodos } from "../api/apis";

interface ICreateTodo {
  token: string | null;
}

function CreateTodo({ token }: ICreateTodo) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const createMutation = useCreateTodo(createTodos);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof token === "string") {
      const params = {
        body: { title, content },
        token,
      };
      createMutation.mutate(params);
      setTitle("");
      setContent("");
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
