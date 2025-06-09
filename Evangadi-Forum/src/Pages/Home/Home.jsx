import React from "react";
import Layout from "../../Component/Layout/Layout";
import { useAuth } from "../../Component/Auth/auth";
import classes from "../Home/Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handle_click = () => {
    navigate("/AskQuestion");
  };
  const auth = useAuth();

  return (
    <Layout showFooter={false}>
      <section className={classes.container}>
        <section className={classes.inner_container}>
          <button onClick={handle_click} className={classes.button}>
            Ask Question
          </button>
          <p className={classes.user_Name}>
            <h3>Welcome: {auth.email}</h3>{" "}
          </p>
        </section>

        <section className={classes.questions_container}>
          <h3>Questions</h3>
          <div className={classes.questions}>
            <p>There are no questions at the moment!!!</p>
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default Home;
