import React from "react";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home/Home";
import "../src/App.css";

function App() {
  return (
    <div className="container">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
