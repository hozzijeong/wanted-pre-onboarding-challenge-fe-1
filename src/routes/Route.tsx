import { BrowserRouter, Routes, Route } from "react-router-dom";

function URLRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo">
          <Route path="/todo/:id" />
        </Route>
        <Route path="/auth/login" />
        <Route path="/auth/auth" />
      </Routes>
    </BrowserRouter>
  );
}

export default URLRoutes;
