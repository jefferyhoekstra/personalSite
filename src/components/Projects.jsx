import "./css/Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <a href="https://www.wavenet-ten.vercel.app">NetWave Blogsite </a>
      <div className="ProjectsList">
        <iframe
          src="https://wavenet-ten.vercel.app/"
          width="500"
          height="600"
          style={{ border: "8px solid #353535ff", borderRadius: "8px" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
