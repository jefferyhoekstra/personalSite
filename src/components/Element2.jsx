import c__ from "../assets/lang/c++.svg";
import react from "../assets/lang/react.svg";
import csharp from "../assets/lang/c-sharp.png";
import css3 from "../assets/lang/css-3.png";
import html5 from "../assets/lang/html-5.png";
import java from "../assets/lang/java.png";
import js from "../assets/lang/js.png";
import python from "../assets/lang/python.png";
import c from "../assets/lang/c.png";

import github from "../assets/github.png";
import soundcloud from "../assets/soundcloud.png";
import linkedin from "../assets/linkedin.png";

import arrowDown from "../assets/arrowDown.png";

export default function Element2() {
  return (
    <div className="element2">
      <br></br>
      <h3>My Coding Stack & Biography</h3>

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
        I’m a student in <strong>Ontario, Canada</strong>, studying at{" "}
        <strong>St. Lawrence College</strong> with a focus on{" "}
        <strong>web programming</strong> and <strong>development</strong>. I
        love learning and often dive into{" "}
        <strong>mathematics, psychology, philosophy</strong>, and{" "}
        <strong>personal development</strong>. Outside of programming, I make
        music and enjoy art, which inspires my creativity and problem‑solving.
      </p>

      {/* <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button className="seemywork">View My Work</button>
      </a> */}

      <div className="linkstomywork-text">
        <h3>Explore my work</h3>
      </div>

      <div className="linkstomywork">
        <a href="https://github.com/jefferyhoekstra">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/jefferyhoekstra/">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://soundcloud.com/superhumanbuddha">
          <img src={soundcloud} alt="" />
        </a>
      </div>
    </div>
  );
}
