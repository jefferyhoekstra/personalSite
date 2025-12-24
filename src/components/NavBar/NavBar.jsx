/// COMPONENTS

import { useState } from "react";

/// CSS
import "./navBar.css";

/// IMAGES
import homeIcon from "/src/assets/images/NavBar/homeIcon.svg";
import aboutIcon from "/src/assets/images/NavBar/aboutIcon.svg";
import contactIcon from "/src/assets/images/NavBar/contactIcon.svg";

/// FUNCTION
export default function NavBar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [suppressAboutHover, setSuppressAboutHover] = useState(false);

  return (
    <>
      <div className="navBar">
        <ul>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={homeIcon} alt="" />
              Home
            </a>
          </li>
          <li>
            <div
              className={
                suppressAboutHover
                  ? "navBar__about navBar__about--suppressHover"
                  : "navBar__about"
              }
              onMouseEnter={() => {
                setSuppressAboutHover(false);
              }}
              onMouseLeave={() => {
                setIsAboutOpen(false);
              }}
            >
              <a
                href="#about"
                aria-haspopup="menu"
                onClick={(e) => {
                  e.preventDefault();
                  setSuppressAboutHover(false);
                  setIsAboutOpen((open) => !open);
                }}
              >
                <img src={aboutIcon} alt="" />
                About
              </a>

              <div
                className={
                  isAboutOpen
                    ? "navBar__aboutMenu navBar__aboutMenu--open"
                    : "navBar__aboutMenu"
                }
                role="menu"
              >
                <a
                  href="#bio"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAboutOpen(false);
                    setSuppressAboutHover(true);
                    document
                      .querySelector(".element1")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Bio
                </a>
                <a
                  href="#projects"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAboutOpen(false);
                    setSuppressAboutHover(true);
                    document
                      .querySelector(".projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Projects
                </a>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(".contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <img src={contactIcon} alt="" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
