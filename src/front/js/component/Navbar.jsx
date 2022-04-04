import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [redirect, setRedirect] = useState(false);
  const handleClick = () => {
    actions.logout();
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            Authentication JWT Exercise
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/login">
            {store.token == "" ? (
              ""
            ) : (
              <button className="btn btn-primary" onClick={handleClick}>
                Log Out
              </button>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
