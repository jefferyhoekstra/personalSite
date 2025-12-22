// ------- LIBARIES ------- \\
import { useState } from "react";

// ------- CSS ------- \\
import "./App.css";
// ------- COMPONENTS ------- \\
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Element1 from "./components/Element1";
import Element2 from "./components/Element2";
import Element3 from "./components/Element3";
import Visuals1 from "./components/Visuals1";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background">
        <Header />
        <Hero />
      </div>
      <Element1 />
      <Element2 />
      <Projects />
      <Visuals1 />
      <Element3 />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
