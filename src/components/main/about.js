import * as React from "react";
import { main, mainContainer, about, qualification } from "./about.module.css";

const About = () => {
  return (
    <>
      <main className={main}>
        <div className={mainContainer}>
          <div className={about}>about</div>
          <div className={qualification}>qualification</div>
        </div>
      </main>
    </>
  );
};

export default About;
