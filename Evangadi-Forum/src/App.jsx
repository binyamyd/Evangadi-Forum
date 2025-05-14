import React from "react";
import Layout from "./Component/Layout/Layout";
import "../src/App.css";
import Login from "../src/Pages/Login/Login";

function App() {
  return (
    <div>
      <Layout>
        <Login />
      </Layout>
    </div>
  );
}

export default App;
