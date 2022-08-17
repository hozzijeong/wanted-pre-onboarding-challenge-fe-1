import { ITodos } from "../utility/types";
import TodoItem from "./TodoItem";

interface ITodoList {
  todos: ITodos[];
}
function TodoList({ todos }: ITodoList) {
  return (
    <div>
      <ul>{[...todos.map((x: ITodos) => <TodoItem key={x.id} todo={x} />)]}</ul>
    </div>
  );
}

export default TodoList;
