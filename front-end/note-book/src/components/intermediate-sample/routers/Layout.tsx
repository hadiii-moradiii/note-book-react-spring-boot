import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      this is Layout <br />
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>{" "}
      {"  "}
      <NavLink to="/users">users</NavLink> {"  "}
      <NavLink to="/login">Login</NavLink> {"  "}
      <NavLink to={`/posts/1?name=hadi&lastname=moradi`}>posts</NavLink>
      <br />
      <Outlet />
    </div>
  );
};

export default Layout;
