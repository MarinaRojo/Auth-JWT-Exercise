import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

let email = "";
let password = "";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [redirect, setRedirect] = useState(false);

  return (
    <div>
      <div className="mt-5 m-auto container w-25">
        <h2>Login</h2>

        {redirect ? (
          <Link to="/private">Acceder a página privada</Link>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              actions.login(email, password);
              setRedirect(true);
            }}
          >
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(event) => {
                  email = event.target.value;
                }}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => {
                  password = event.target.value;
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
