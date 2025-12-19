import "./css/Projects.css";

export default function Projects() {
  return (
    <section className="Projects">
      <div className="title">
        <h3>My Projects</h3>
      </div>
      <a href="https://www.wavenet-ten.vercel.app">NetWave Blogsite </a>
      <div className="ProjectsList">
        <iframe
          src="https://wavenet-ten.vercel.app/"
          width="450"
          height="600"
          style={{ border: "2px solid #5448d6ff", borderRadius: "8px" }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
