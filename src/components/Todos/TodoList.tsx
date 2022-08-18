import Title from "components/Title";
import { ITodos } from "utility/types";
import TodoItem from "./TodoItem";

interface ITodoList {
  todos: ITodos[];
}
function TodoList({ todos }: ITodoList) {
  return (
    <div>
      <Title title="TodoList" size={"3.6rem"} />
      <ul>{[...todos.map((x: ITodos) => <TodoItem key={x.id} todo={x} />)]}</ul>
    </div>
  );
}

export default TodoList;
