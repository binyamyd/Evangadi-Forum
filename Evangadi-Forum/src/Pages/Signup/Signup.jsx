import React, { useState } from "react";
import classes from "../Signup/Signup.module.css";
import Layout from "../../Component/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(firstName);
    console.log(lastName);
    console.log(userName);
    console.log(password);
    try {
      if (!email || !firstName || !lastName || !userName || !password) {
        alert("Please fill out the form");
      } else {
        alert("signUp successful");
        navigate("/");
      }
    } catch (error) {
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <Layout>
      <div className={classes.container_login}>
        <div className={classes.form_container}>
          <h2>Join the network</h2>
          <p>
            Already have an account?<Link to="/"> Sign in</Link>
          </p>
          <form onSubmit={handleSubmit} className={classes.input_style}>
            <input
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
              className={classes.box}
              placeholder="Email"
            />

            <div className={classes.names_container}>
              <input
                type="User Name"
                onChange={(e) => setFirstName(e.target.value)}
                className={classes.box}
                placeholder="First Name"
              />
              <input
                type="User Name"
                onChange={(e) => setLastName(e.target.value)}
                className={classes.box}
                placeholder="Last Name"
              />
            </div>
            <input
              type="User Name"
              onChange={(e) => setUserName(e.target.value)}
              className={classes.box}
              placeholder="User Name"
            />
            <input
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              className={classes.box}
              placeholder="Password"
            />
            <input
              type="submit"
              value="Agree And Join"
              className={classes.signin_submit}
            />
          </form>
          <p>
            I agree to the <a href="">Privacy policy</a> and{" "}
            <a href="">terms of service</a>
          </p>
          <Link to="/">Already have an account?</Link>
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
