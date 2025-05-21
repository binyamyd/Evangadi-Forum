import React from "react";
import Layout from "../../Component/Layout/Layout";

function AskQuestion() {
  return (
    <Layout>
      <h2>Steps to write a good question</h2>
      <ul>
        <li>Summerize your problem in a one-line title.</li>
        <li>Sescribe your problem in more detail.</li>
        <li>Sescribe what you tried and what you expected to happen.</li>
        <li>Review your question and post it to the site.</li>
      </ul>

      <h2>Ask a public question</h2>
      <p>Go to question page</p>
      <form action="submit">
        <label for="message">Title</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
      </form>
    </Layout>
  );
}

export default AskQuestion;
