import * as React from "react";
import Layout from "../components/layout";
import About from "../components/main/about";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Marisa Howard">
        <h2>Counselling and Psychotherapy in Naarm/Melbourne</h2>
      </Layout>
      <About />
    </>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
