import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ms from "ms";
import AddUser from "./react-query/AddUser";
import UsersList from "./react-query/UsersList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 10_000,
      gcTime: ms("100s"),
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,
      // placeholderData: true,
    },
  },
});

const SampleReactQuery = () => {
  return (
    <div>
      <h3>Instaliation</h3>
      <code>npm i @tanstack/react-query</code>
      <code>npm i -D @tanstack/eslint-plugin-query</code> <br />
      <code>npm i @tanstack/react-query-devtools</code>
      <br />
      <code>npm i @types/ms</code>
      <br />
      <QueryClientProvider client={queryClient}>
        <AddUser />
        <UsersList />

        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
};

export default SampleReactQuery;
