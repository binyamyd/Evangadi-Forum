import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./src/Pages/Login/Login";
import Signup from "../Evangadi-Forum/src/Pages/Signup/Signup";
import Home from "../Evangadi-Forum/src/Pages/Home/Home";
import Question_Answer from "./src/Pages/Question_Answer/Question_Answer";
import AskQuestion from "./src/Pages/AskQuestion/AskQuestion";
import { AuthProvider } from "./src/Component/Auth/auth";
import { RequiredAuth } from "./src/Component/Auth/RequireAuth";

function Routing() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Question_Answer" element={<Question_Answer />} />
            <Route
              path="/"
              element={
                <RequiredAuth>
                  <AskQuestion />
                </RequiredAuth>
              }
            />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default Routing;
