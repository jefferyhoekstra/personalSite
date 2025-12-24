/// COMPONENTS

/// CSS
import "./navBar.css";

/// IMAGES
import homeIcon from "/src/assets/images/NavBar/homeIcon.svg";
import aboutIcon from "/src/assets/images/NavBar/aboutIcon.svg";
import contactIcon from "/src/assets/images/NavBar/contactIcon.svg";

/// FUNCTION
export default function NavBar() {
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
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(".element1")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <img src={aboutIcon} alt="" />
              About
            </a>
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
