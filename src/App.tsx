import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import URLRoutes from "./routes/Route";

function App() {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.log(error, query);
        if (query.state.data !== undefined) {
          console.error(`에러가 났어요!!: ${error}`);
        }
      },
      onSuccess: (data) => {
        console.log(data);
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <URLRoutes />
    </QueryClientProvider>
  );
}

export default App;
