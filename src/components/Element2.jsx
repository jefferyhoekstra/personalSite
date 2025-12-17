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
        I’m a student based in <strong>Ontario, Canada</strong>, currently
        enrolled at <strong>St. Lawrence College</strong>. My primary focus is
        <strong> web programming</strong> and <strong>development</strong>, and
        I have a deep love for learning and the pursuit of knowledge. I enjoy
        exploring <strong>mathematics, psychology, and philosophy</strong>, and
        <strong> personal development</strong> and
        <strong> moral understanding</strong> are central to both my studies and
        my work. Outside of programming, I make music and have a strong
        appreciation for art, which continually influences my creativity and
        problem-solving.
      </p>

      <a
        href="https://github.com/jefferyhoekstra"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button className="seemywork">View My Work</button>
      </a>
    </div>
  );
}
