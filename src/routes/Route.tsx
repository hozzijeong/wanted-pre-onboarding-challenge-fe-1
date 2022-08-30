import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import NotFound from "./NotFound";
import Home from "./Todos/Home";
import TodoDetail from "./Todos/TodoDetail";

function URLRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/details/:id" element={<TodoDetail />} />
        </Route>

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default URLRoutes;
