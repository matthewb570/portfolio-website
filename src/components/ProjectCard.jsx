import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "../styles/Card.css";

export default function ProjectCard({
  imageSource,
  imageAltText,
  title,
  description,
  githubUrl,
  demoUrl,
}) {
  return (
    <div className="card">
      {imageSource ? <img src={imageSource} alt={imageAltText} /> : ""}
      <div className="main-content">
        <h3 className="title">{title}</h3>
        <span className="description">{description}</span>
        <div className="link-list">
          {githubUrl ? (
            <a className="icon" href={githubUrl} target="blank">
              <SiGithub color="default" size={25} />
            </a>
          ) : (
            ""
          )}
          {demoUrl ? (
            <a className="icon" href={demoUrl} target="blank">
              <FaArrowUpRightFromSquare
                color="black"
                size={20}
                title="Open Demo"
              />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
