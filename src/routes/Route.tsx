import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function URLRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo">
          <Route path="/todo/:id" />
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default URLRoutes;
