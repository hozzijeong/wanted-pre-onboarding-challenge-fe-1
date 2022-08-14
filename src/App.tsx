import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import URLRoutes from "./routes/Route";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <URLRoutes />;
    </QueryClientProvider>
  );
}

export default App;
