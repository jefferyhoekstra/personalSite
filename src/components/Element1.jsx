import img1 from "../assets/img2.png";
import bg from "../assets/bg.png";

export default function Element1() {
  return (
    <div className="bg">
      {/* <img src={bg} alt="" /> */}
      <div className="element1">
        <h1>Jeffery Hoekstra</h1>
        <h2>👽 Artist & Developer 🛸</h2>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}
