import img1 from "../assets/img2.png";
import bg from "../assets/bg.png";
import arrowDown from "../assets/arrowDown.png";

import c__ from "../assets/lang/c++.svg";
import react from "../assets/lang/react.svg";
import csharp from "../assets/lang/c-sharp.png";
import css3 from "../assets/lang/css-3.png";
import html5 from "../assets/lang/html-5.png";
import java from "../assets/lang/java.png";
import js from "../assets/lang/js.png";
import python from "../assets/lang/python.png";
import c from "../assets/lang/c.png";

export default function Element1() {
  return (
    <div className="bg">
      {/* <img src={bg} alt="" /> */}
      <div className="element1">
        <div className="text-section">
          <h1>Jeffery Hoekstra</h1>
          <h2>Developer</h2>
        </div>
        <div className="image-section">
          <img src={img1} alt="" />
        </div>
        {/* <div className="icon-section">
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
            <img src={react} alt="" width="45px" /> */}
        {/* </div> */}
      </div>
      {/* <div className="arrowImage">
        <img src={arrowDown} alt="" />
      </div> */}
    </div>
  );
}
