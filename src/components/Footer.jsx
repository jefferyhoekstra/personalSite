import homeIcon from "../assets/homeIcon.svg";
import aboutIcon from "../assets/aboutIcon.svg";
import contactIcon from "../assets/contactIcon.svg";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="#">
            <img src={homeIcon} alt="" />
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <img src={aboutIcon} alt="" />
            About
          </a>
        </li>
        <li>
          <a href="#">
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
