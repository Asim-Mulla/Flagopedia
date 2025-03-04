import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Error Page</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button className="btn btn-outline-light">Home</button>
      </NavLink>
    </div>
  );
};
