import c__ from "../assets/lang/c++.svg";
import react from "../assets/lang/react.svg";
import csharp from "../assets/lang/c-sharp.png";
import css3 from "../assets/lang/css-3.png";
import html5 from "../assets/lang/html-5.png";
import java from "../assets/lang/java.png";
import js from "../assets/lang/js.png";
import python from "../assets/lang/python.png";
import c from "../assets/lang/c.png";

export default function Element2() {
  return (
    <div className="element2">
      <br></br>
      <h3>My expertise is in web programming & development</h3>

      <div className="icon-section">
        <img src={c} alt="" width="40px" />
        <img src={c__} alt="" width="40px" />
        <img src={csharp} alt="" width="40px" />
        <img src={css3} alt="" width="40px" />
        <img src={html5} alt="" width="40px" />
        <img src={java} alt="" width="40px" />
        <img src={js} alt="" width="40px" />
        <img src={react} alt="" width="40px" />
        {/* <img src={python} alt="" width="40px" /> */}
        {/* <img src={react} alt="" width="45px" />
            <img src={react} alt="" width="45px" /> */}{" "}
      </div>

      <br></br>
      <p>
        I’m a 24-year-old student based in Kingston, Ontario, currently enrolled
        in the Computer Programming & Analysis (CPA) program at St. Lawrence
        College. My primary expertise is in web programming and development. I
        enjoy learning across a wide range of disciplines, including
        mathematics, psychology, and philosophy. Personal development and moral
        understanding are central to both my studies and my work.
      </p>
    </div>
  );
}
