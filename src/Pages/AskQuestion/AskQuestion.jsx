import React, { useState } from "react";
import Layout from "../../Component/Layout/Layout";
import classes from "../AskQuestion/AskQuestion.module.css";
import { useAuth } from "../../Component/Auth/auth";

function AskQuestion() {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(question);
    try {
      if (!title || !question) {
        alert("please fill out the form");
      } else {
        alert("question posted successfully");
        setTitle("");
        setQuestion("");
      }
    } catch (error) {
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <Layout showFooter={false}>
      <div className={classes.container}>
        <h4>Welocme: {auth.email}</h4>
        <h2>Steps to write a good question</h2>
        <ul>
          <li>Summerize your problem in a one-line title.</li>
          <li>Sescribe your problem in more detail.</li>
          <li>Sescribe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>

        <div className={classes.question_container}>
          <h2>Ask a public question</h2>
          <p>Go to question page</p>
          <form
            action="submit"
            onSubmit={handleSubmit}
            className={classes.form_container}
          >
            <textarea
              className={classes.box}
              name="title"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              rows="1"
              cols="140"
            ></textarea>

            <textarea
              className={classes.box}
              name="message"
              value={question}
              placeholder="Question Description.."
              onChange={(e) => setQuestion(e.target.value)}
              rows="10"
              cols="140"
            ></textarea>
            <input
              type="submit"
              value="Post Your Question"
              className={classes.submit}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AskQuestion;
