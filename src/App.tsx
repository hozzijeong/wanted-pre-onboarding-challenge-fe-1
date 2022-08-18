import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Layout from "components/Layout";
import React from "react";
import URLRoutes from "./routes/Route";

function App() {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        if (query.state.data !== undefined)
          console.error(`error occured: ${error}`);
      },
    }),
    defaultOptions: { queries: { suspense: true } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <URLRoutes />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
