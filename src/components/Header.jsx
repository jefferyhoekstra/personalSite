// ------- CSS ------- \\
import "./css/Header.css";

// ------- IMAGES ------- \\
import Logo from "../assets/logo.svg";

// ------ CODE ------- \\
export default function Header() {
  return (
    <header>
      <img src={Logo} alt="" />
    </header>
  );
}
