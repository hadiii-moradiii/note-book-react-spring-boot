import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const isRouteError = isRouteErrorResponse(error);
  return (
    <div>
      ops .... <br />
      ERROR ... <br /> {isRouteError ? "invalid page" : "unexpected error"}
    </div>
  );
};

export default ErrorPage;
