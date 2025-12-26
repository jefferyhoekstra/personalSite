/// CSS
import "./projects.css";

/// IMAGES
import arrowDown from "/src/assets/images/Projects/arrowDown.png";
import wearyourtownThumb from "/src/assets/images/Projects/wearyourtown.png";

/// FUNCTION
export default function Projects() {
  return (
    <>
      <div className="projects">
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
              width="375"
              height="450"
              style={{ border: "2px solid #5448d6ff", borderRadius: "8px" }}
              loading="lazy"
              title="NetWave preview"
            ></iframe>
          </div>

          <div className="Project project-frame">
            <a
              className="project-frame__link"
              href="https://groundhabit.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GroundHabit preview"
            />
            <iframe
              src="https://groundhabit.com/"
              width="375"
              height="450"
              style={{ border: "2px solid #5448d6ff", borderRadius: "8px" }}
              loading="lazy"
              title="GroundHabit preview"
            ></iframe>
          </div>
          {/* <div className="Project2 project-frame">
            <a
              className="project-frame__link"
              href="https://wearyourtown.ca/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open WearYourTown preview"
            />
            <img
              className="project-frame__media"
              src={wearyourtownThumb}
              width="375"
              height="450"
              style={{ border: "2px solid #5448d6ff", borderRadius: "8px" }}
              loading="lazy"
              alt="WearYourTown preview"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
