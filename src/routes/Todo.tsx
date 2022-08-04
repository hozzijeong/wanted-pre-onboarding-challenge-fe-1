import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodosAPI } from "../api/apis";
import { ITodos } from "../utility/types";

function Todos() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  const [todos, setTodos] = useState<ITodos[]>([]);

  useEffect(() => {
    if (!token) navigation("/auth/login");
    else getTodosAPI(token).then((data) => setTodos(data.data));
  }, [token]);

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
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
              />
            </tr>
            <tr aria-colspan={2} style={{ height: "100%" }}>
              <textarea style={{ height: "100%", width: "98%" }}></textarea>
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
      <ul>{[...todos.map((x) => <li>x</li>)]}</ul>
      <hr />
    </div>
  );
}

export default Todos;
