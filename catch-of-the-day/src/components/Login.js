import React from "react";

const Login = (props) => (
  <nav className="login">
    <p>Access your account</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Sign In
    </button>
    <a href="/">Join Us</a>
  </nav>
);

export default Login;
