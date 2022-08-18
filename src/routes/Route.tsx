import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Todos from "./Todos/Todo";
import TodoDetail from "./Todos/TodoDetail";

function URLRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />}>
          <Route path="/details/:id" element={<TodoDetail />} />
        </Route>

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default URLRoutes;
