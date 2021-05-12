import React from "react";

import styles from "./About.module.css";

const About = () => {
  return (
    <React.Fragment>
      <h1>About this website</h1>
      <p>
        This website was created as a project for recruitment in{" "}
        <a
          href="https://scalero.io
"
        >
          Scalero
        </a>
        . Code can be found at <a href="http://www.google.com">Github</a>.
      </p>
      <h4 className={styles.Subtitle}>Technology used:</h4>
      <ul>
        <li>Create React App</li>
        <li>React Router</li>
        <li>React Redux</li>
        <li>Heroku</li>
      </ul>
      <h4 className={styles.Subtitle}>Assets:</h4>
      <ul>
        <li>
          Loader from{" "}
          <a href="https://projects.lukehaas.me/css-loaders/">Luke Haas</a>.
        </li>
        <li>
          Font from <a href="https://fonts.google.com/">Google Fonts</a>.
        </li>
        <li>
          Icons from <a href="https://fontawesome.com/">Font Awesome</a>.
        </li>
      </ul>
      <div className={styles.Subtitle}>
        <h4 className={styles.Subtitle}>Contact:</h4>
        <p>Daniela Acosta</p>
        <p>contact@danielaacosta.com</p>
      </div>
    </React.Fragment>
  );
};

export default About;
