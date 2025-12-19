import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Element1 from "./components/Element1";
import Element2 from "./components/Element2";
import Element3 from "./components/Element3";
import Element4 from "./components/Element4";
import Element5 from "./components/Element5";
import Visuals1 from "./components/Visuals1";
import Projects from "./components/Projects";

import ContactForm from "./components/ContactForm";

import ArrowDown from "./components/ArrowDown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="background">
        <Header />
        <Element1 />
      </div>
      <Element2 />
      <Element4 />
      <Projects />
      <Visuals1 />

      <Element3 />
      <Footer />
    </>
  );
}

export default App;
