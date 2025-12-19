import "./css/Projects.css";

export default function Projects() {
  return (
    <section className="Projects">
      <div className="title">
        <h2>My Projects</h2>
      </div>
      <a href="https://www.wavenet-ten.vercel.app">NetWave Blogsite </a>
      <div className="ProjectsList">
        <iframe
          src="https://wavenet-ten.vercel.app/"
          width="450"
          height="650"
          style={{ border: "2px solid #5448d6ff", borderRadius: "8px" }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
