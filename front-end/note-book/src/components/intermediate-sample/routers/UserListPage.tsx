import React from "react";
import { Navigate } from "react-router-dom";

const UserListPage = () => {
  // for example user is null
  if (true) {
    return <Navigate to={"/login"} />;
  }
  return <div>User List</div>;
};

export default UserListPage;
