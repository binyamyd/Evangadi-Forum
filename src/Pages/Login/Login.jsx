import React, { useState } from "react";

import Layout from "../../Component/Layout/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "../Login/Login.module.css";
import { useAuth } from "../../Component/Auth/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    try {
      if (!email || !password) {
        alert("Please fill out the form");
      } else {
        alert("Login successful!");
        auth.login(email);
        console.log(email);
        navigate(redirectPath, { replace: true });
      }
    } catch (error) {
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <Layout>
      <div className={classes.container_login}>
        <div className={classes.form_container}>
          <h2>Login to your account</h2>
          <p>
            Don't have an account?<Link to="/signUp">create a new account</Link>
          </p>
          <form onSubmit={handleSubmit} className={classes.styled_form}>
            <input
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={classes.box}
              placeholder="Your Email"
            />
            <input
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={classes.box}
              placeholder="Your Password"
            />
            <input type="submit" value="Submit" className={classes.submit} />
          </form>

          <Link to="/signUp">create an account?</Link>
        </div>
        <div className={classes.info_container}>
          <a href="">About</a>
          <h1>Evangadi Networks Q&A</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
            sollicitudin quam. Donec convallis nibh libero, eget ultrices ligula
            dignissim eu. Mauris non sollicitudin elit. Donec rhoncus iaculis
            rhoncus iaculis.
          </p>
          <br />
          <p>
            Nunc suscipit tellus eget venenatis tempor. Sed facilisis, nisi id
            suscipit interdum, nunc orci cursus odio, et elementum ex nisi vitae
            augue. Orci varius natoque penatibus et magnis dis parturient montes
            parturient.
          </p>
          <br />
          <p>
            Praesent aliquam sapien nec rutrum gravida. Etiam quis fringilla
            lorem, ac gravida nulla. Maecenas lacinia quam a mi euismod tempor.
            Phasellus maximus egestas arcu, at finibus sem tristique quis. Cras
            finibus euismod tellus, eget dapibus sem. Vivamus sollicitudin
          </p>
          <button className={classes.info_button}>HOW IT WORKS</button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
