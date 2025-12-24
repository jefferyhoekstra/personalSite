// ------- CSS ------- \\
import "./HeroImage.css";

// ------- IMAGES ------- \\
import Logo from "/src/assets/images/logo.svg";

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
