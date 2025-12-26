// ------- CSS ------- \\
import "./HeroImage.css";

// ------- IMAGES ------- \\
import Logo from "../../../public/logo.png";

// ------ CODE ------- \\
export default function HeroImage() {
  return (
    <>
      <div className="HeroImage">
        <img src={Logo} alt="" />
      </div>
    </>
  );
}
