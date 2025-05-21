import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./src/Pages/Login/Login";
import Signup from "../Evangadi-Forum/src/Pages/Signup/Signup";
import Home from "../Evangadi-Forum/src/Pages/Home/Home";
import Question_Answer from "./src/Pages/Question_Answer/Question_Answer";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Question_Answer" element={<Question_Answer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
