import "./Projects.scss";
import GooglePlayIcon from "assets/google-play-badge.png";
const Projects = () => {
  return (
    <section id="project-section">
      <h1>Projects</h1>
      <div className="container">
        <div className="card">
          <div className="card-container">
            <h3>Ultimate Clicker</h3>
            <img src="react-pages/ultimate_clicker_logo.png" />
            <img className="google-play-icon" src={GooglePlayIcon} />
            <p>Clicker APP</p>
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <h3>Ultimate Clicker</h3>
            <img src="react-pages/ultimate_clicker_logo.png" />
            <p>Clicker APP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
