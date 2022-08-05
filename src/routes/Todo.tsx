import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { createTodos, getTodosAPI } from "../api/apis";
import { detailAtom, todosAtom } from "../atom";
import TodoItem from "../components/TodoItem";
import { ITodos } from "../utility/types";
import TodoDetail from "./TodoDetail";

interface IChangeValue {
  e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
  fnc: React.Dispatch<React.SetStateAction<string>>;
}

function Todos() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  const [todos, setTodos] = useRecoilState<ITodos[]>(todosAtom);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const changeValue = ({ e, fnc }: IChangeValue) => {
    const { value } = e.currentTarget;
    fnc(value);
  };
  useEffect(() => {
    if (!token) navigation("/auth/login");
    else getTodosAPI(token).then((data) => setTodos(data.data));
  }, [token]);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (typeof token === "string") {
      createTodos({ title, content }, token).then((data) => {
        if (data?.details) {
          alert(data.details);
        } else {
          setTitle("");
          setContent("");
          getTodosAPI(token).then((data) => setTodos(data.data));
        }
      });
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        <h2>Add Task</h2>

        <input
          style={{ width: "98%" }}
          type="text"
          placeholder="type title"
          value={title}
          onChange={(e) => changeValue({ e, fnc: setTitle })}
        />

        <textarea
          style={{ height: "100%", width: "98%" }}
          value={content}
          onChange={(e) => changeValue({ e, fnc: setContent })}
        ></textarea>

        <button onClick={(e) => onSubmit(e)}>추가하기</button>
      </div>
      <hr />
      <div>
        <ul>{[...todos.map((x: ITodos) => <TodoItem key={x.id} {...x} />)]}</ul>
      </div>
      <hr />
      <TodoDetail />
    </div>
  );
}

export default Todos;
