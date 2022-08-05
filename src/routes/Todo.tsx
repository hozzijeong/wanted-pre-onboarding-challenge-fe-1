import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodos, getTodosAPI } from "../api/apis";
import { ITodos } from "../utility/types";

interface IChangeValue {
  e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
  fnc: React.Dispatch<React.SetStateAction<string>>;
}

function Todos() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  const [todos, setTodos] = useState<ITodos[]>([]);

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

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (typeof token === "string") {
      console.log(title, content);
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
        <table width="500" border={1}>
          <thead>
            <tr>
              <th>Add Task</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <input
                style={{ width: "98%" }}
                type="text"
                placeholder="type title"
                value={title}
                onChange={(e) => changeValue({ e, fnc: setTitle })}
              />
            </tr>
            <tr aria-colspan={2} style={{ height: "100%" }}>
              <textarea
                style={{ height: "100%", width: "98%" }}
                value={content}
                onChange={(e) => changeValue({ e, fnc: setContent })}
              ></textarea>
            </tr>
            <tr aria-colspan={2}>
              <input
                type="button"
                value="추가하기"
                onClick={(e) => onSubmit(e)}
              />
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <ul>{[...todos.map((x) => <li>{x.title}</li>)]}</ul>
      <hr />
    </div>
  );
}

export default Todos;
