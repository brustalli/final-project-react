import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Open-sourced{" "}
          <a
            href="https://github.com/brustalli/final-project-react"
            target="_blank"
          >
            code
          </a>{" "}
          by{" "}
          <a href="https://www.linkedin.com/in/bruna-stalliviere-coelho-8022a987/">
            Bruna Stalliviere
          </a>
        </footer>
      </div>
    </div>
  );
}
