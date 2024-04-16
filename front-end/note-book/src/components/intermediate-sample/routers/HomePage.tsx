import { Button } from "@mui/material";
import { count } from "console";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const counter = 0;
  return (
    <div>
      Home Page
      <br />
      <Link to="/users">users</Link>
      <br />
      <Button onClick={() => navigate("/login")}>Login</Button>
      <br />
      <Link to={`/posts/${counter}`}>posts</Link>
      <br />
      <Link to="/dashboard/users">dashboard</Link>
    </div>
  );
};

export default HomePage;
