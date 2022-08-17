import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Todos from "./Todo";
import TodoDetail from "./TodoDetail";

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
