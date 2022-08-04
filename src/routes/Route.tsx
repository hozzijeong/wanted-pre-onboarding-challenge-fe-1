import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Todos from "./Todo";

function URLRoutes() {
  // locaoStorage에서 토큰 값 확인 후, 만약에 유효하지 않다면 login화면으로 이동시킬 것.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />}>
          <Route path="/details/:id" />
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default URLRoutes;
