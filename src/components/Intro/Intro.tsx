import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Intro.scss";
import { useState } from "react";

const linkedinUrl = "https://www.linkedin.com/in/tongyy";
const githubUrl = "https://github.com/tongyy";
const Intro = () => {
  const [githubHover, setGithubHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);

  return (
    <section id="intro-section">
      <div>
        <div>
          <h1>Tony Yang</h1>
          <button
            className="brand-button"
            onClick={() => window.location.assign(githubUrl)}
            onMouseEnter={() => setGithubHover(true)}
            onMouseLeave={() => setGithubHover(false)}
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="github-icon"
              beatFade={githubHover}
            />
          </button>
          <button
            className="brand-button"
            onClick={() => window.location.assign(linkedinUrl)}
            onMouseEnter={() => setLinkedinHover(true)}
            onMouseLeave={() => setLinkedinHover(false)}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="linkedin-icon"
              beatFade={linkedinHover}
            />
          </button>
        </div>

        <h3>Staff Engineer, Full Stack Developer, Instructor</h3>
      </div>
    </section>
  );
};

export default Intro;
