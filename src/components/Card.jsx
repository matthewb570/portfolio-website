import { SiGithub } from "@icons-pack/react-simple-icons";
import "../styles/Card.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Card() {
  // TODO: Receive data from props

  return (
    <div className="card">
      <img src="" alt="Project image" />
      <div className="main-content">
        <h1 className="title">Title</h1>
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam,
          tenetur voluptates veritatis veniam itaque porro exercitationem
          laboriosam iste a placeat iure sunt delectus similique quasi,
          voluptatem rerum modi animi!
        </span>
        <div className="link-list">
          <a className="icon" href="https://www.github.com" target="blank">
            <SiGithub color="default" size={25} />
          </a>
          <a className="icon" href="https://www.github.com" target="blank">
            <FaArrowUpRightFromSquare
              color="black"
              size={20}
              title="Open Demo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
