import UltimateClickerIcon from "assets/ultimate-clicker-logo.png";
import GooglePlayIcon from "assets/google-play-badge.png";
import GithubIcon from "assets/github-icon.png";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id="project-section">
      <h1>Projects</h1>
      <div className="container">
        <div
          className="card"
          onClick={() =>
            window.open("https://ntstudio-ai.github.io/", "_blank")
          }
        >
          <div className="card-container">
            <h3>Ultimate Clicker</h3>
            <img className="card-pic" src={UltimateClickerIcon} />
            <div className="overview">
              <div>4.5&#9733; 300+ reviews</div>
              <div>50K+ Downloads</div>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener"
                href="https://play.google.com/store/apps/details?id=nt.studio.ultimateclicker"
              >
                <img className="google-play-icon" src={GooglePlayIcon} />
              </a>
            </div>
          </div>
        </div>
        <div
          className="card"
          onClick={() =>
            window.open(
              "https://github.com/tongyy/react-native-draggable",
              "_blank"
            )
          }
        >
          <div className="card-container">
            <h3>react-native-draggable</h3>
            <img className="card-pic github-icon" src={GithubIcon} />
            <div className="overview">
              <div>Github 300+&#9733;</div>
              <div>860K+ Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
