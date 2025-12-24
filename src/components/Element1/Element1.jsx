/// CSS
import "./element1.css";

/// IMAGES
import c__ from "/src/assets/images/Element1/c++.svg";
import react from "/src/assets/images/Element1/react.svg";
import csharp from "/src/assets/images/Element1/c-sharp.png";
import css3 from "/src/assets/images/Element1/css-3.png";
import html5 from "/src/assets/images/Element1/html-5.png";
import java from "/src/assets/images/Element1/java.png";
import js from "/src/assets/images/Element1/js.png";
import c from "/src/assets/images/Element1/c.png";

import github from "/src/assets/images/Element1/github.png";
import soundcloud from "/src/assets/images/Element1/soundcloud.png";
import linkedin from "/src/assets/images/Element1/linkedin.png";

/// FUNCTION
export default function Element1() {
  return (
    <>
      <div className="element1">
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
    </>
  );
}
