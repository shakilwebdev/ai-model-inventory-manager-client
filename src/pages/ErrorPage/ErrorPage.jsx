import React from "react";
import { Link, useRouteError } from "react-router";
import ErrorImg from "../../assets/images/error-404.png";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center mt-36 gap-4">
      <title>Error-404</title>
      <img src={ErrorImg} alt="ErrorImg" />
      <h2 className="mt-5">Oops, page not found!</h2>
      <p>The page you are looking for is not available.</p>
      <p className="text-red-500">{error.message}</p>
      <Link to="/" className="btn btn-primary">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
