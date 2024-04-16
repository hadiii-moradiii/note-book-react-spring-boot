import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import LoginPage from "./LoginPage";
import PostPage from "./PostPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "users", element: <UserListPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "posts/:id", element: <PostPage /> },
      {
        path: "dashboard",
        element: <PrivateRoute />,
        children: [{ path: "users", element: <UserListPage /> }],
      },
    ],
  },
]);

export default router;
