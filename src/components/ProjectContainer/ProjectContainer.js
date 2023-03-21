import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <>
    <div className="project">
      <div className="project__details">
        <h3>{project.name}</h3>

        <p className="project__description">{project.description}</p>
        {project.stack && (
          <ul className="project__stack">
            {project.stack.map((item) => (
              <li key={uniqid()} className="project__stack-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label="source code"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label="live preview"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchIcon />
          </a>
        )}
        <div className="image__gallery">
          <img src={project.gallery} alt="gallery" />
        </div>
      </div>

      <div className="project__image">
        <img src={project.image} alt="projects" />
      </div>
    </div>
  </>
);

export default ProjectContainer;
