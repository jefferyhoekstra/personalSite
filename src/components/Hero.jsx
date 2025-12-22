// ------- CSS ------- \\
import "./css/Hero.css";

// ------- IMAGES ------- \\
import img1 from "../assets/img2.png";

// ------ CODE ------- \\
export default function Hero() {
  return (
    <div className="bg">
      {/* <img src={bg} alt="" /> */}
      <div className="hero">
        <div className="text-section">
          <h1>Jeffery Hoekstra</h1>
          <h2>Developer</h2>
        </div>
        <div className="image-section">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}
