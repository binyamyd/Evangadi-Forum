import React from "react";
import "../Login/Login.css";

function Login() {
  return (
    <div className="container_login">
      <div className="form_container">
        <h2>Login to your account</h2>
        <p>
          Don't have an account?<a href="">create a new account</a>
        </p>
        <form class="styled_form">
          <input type="Email" className="box" placeholder="Your Email" />
          <input type="Password" className="box" placeholder="Your Password" />
          <input type="submit" value="Submit" className="submit" />
        </form>

        <a href="">create an account?</a>
      </div>
      <div className="info_container">
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
        <button className="info_button">HOW IT WORKS</button>
      </div>
    </div>
  );
}

export default Login;
