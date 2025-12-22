// ------- CSS ------- \\
import "./css/Projects.css";
// ------- IMAGES ------- \\
import arrowDown from "../assets/arrowDown.png";

// ------- CODE ------- \\
export default function Projects() {
  return (
    <section className="Projects">
      <div className="title">
        <h3>My Projects</h3>
        <img src={arrowDown} alt="" width="44px" />
      </div>
      <div className="ProjectsList">
        <div className="Project1 project-frame">
          <a
            className="project-frame__link"
            href="https://wavenet-ten.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open NetWave preview"
          />
          <iframe
            src="https://wavenet-ten.vercel.app/"
            width="350"
            height="450"
            style={{ border: "2px solid #5448d6ff", borderRadius: "8px" }}
            loading="lazy"
            title="NetWave preview"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
