import "./css/Projects.css";
import arrowDown from "../assets/arrowDown.png";

export default function Projects() {
  return (
    <section className="Projects">
      <div className="title">
        <h3>My Projects</h3>
        <img src={arrowDown} alt="" width="54px" />
      </div>
      <a href="https://wavenet-27w3b6ufr-jefferyhoekstras-projects.vercel.app">
        NetWave Blogsite{" "}
      </a>
      <div className="ProjectsList">
        <iframe
          src="https://wavenet-ten.vercel.app/"
          width="350"
          height="500"
          style={{ border: "2px solid #5448d6ff", borderRadius: "8px" }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
