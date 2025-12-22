// ------- CSS ------- \\
import "./css/Footer.css";

// ------- IMAGES ------- \\

import homeIcon from "../assets/homeIcon.svg";
import aboutIcon from "../assets/aboutIcon.svg";
import contactIcon from "../assets/contactIcon.svg";

// ------- CODE ------- \\

export default function Footer() {
  return (
    <footer>
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
                .querySelector(".Element2")
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
                .querySelector(".element3")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={contactIcon} alt="" />
            Contact
          </a>
        </li>
      </ul>
      {/* <p>
        <a href="https://pngtree.com">icons & images from pngtree.com</a>
      </p> */}
    </footer>
  );
}
