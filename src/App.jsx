/// LIBARIES

// CSS
import "./App.css";

// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import HeroImage from "./components/Hero/HeroImage";
import Hero from "./components/Hero/Hero";

import HeaderBackground from "./components/HeaderBackground/HeaderBackground";

import bg1 from "./assets/images/Hero/bg1.jpg";
import bg4 from "./assets/images/Hero/bg4.svg";
import heroBackground from "./assets/images/Hero/heroBackground.jpg";

import Element1 from "./components/Element1/Element1";
import Element2 from "./components/Element2/Element2";
import Element3 from "./components/Element3/Element3";
import Visuals1 from "./components/Visuals1/Visuals1";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";

export default function App() {
  const headerBackgrounds = [bg1, bg4, heroBackground];

  return (
    <>
      <div className="app">
        <header className="app_header">
          <HeaderBackground images={headerBackgrounds} intervalMs={8000} />
          <HeroImage />
          <Hero />
        </header>
        <main className="app_main">
          <Element1 />
          <Element2 />
          <Projects />
          <Visuals1 />
          <Element3 />
          <ContactForm />
        </main>
        <footer className="app_footer">
          <NavBar />
        </footer>
      </div>
    </>
  );
}
