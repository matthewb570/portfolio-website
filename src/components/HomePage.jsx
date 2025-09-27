import Accordion, { AccordionEntryDefinition } from "./Accordion";
import ProgressCircle from "./ProgressCircle";
import ProjectCard from "./ProjectCard";
import "../styles/HomePage.css";
import MatthewBurgessImage from "../assets/matthew_burgess.jpg";
import JavaScriptLogo from "../assets/javascript.svg";
import CodeImage from "../assets/code3.jpg";

// TODO: Finish this

export default function HomePage() {
  return (
    <main className="page">
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}

function IntroSection() {
  return (
    <section id="intro-section">
      <div className="filter">
        <div className="content">
          <img src={MatthewBurgessImage} alt="Matthew Burgess" />
          <div className="intro">
            <h1 className="title">Matthew Burgess</h1>
            <span className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              aliquam deleniti eaque! Necessitatibus odio ratione, provident,
              dolor error dignissimos maxime maiores ducimus, eligendi
              doloremque aperiam voluptatum nisi vero. Molestias, accusantium?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills-section">
      <div className="progress-circle-list">
        <ProgressCircle
          percent={0.8}
          fillColor="#61dafb"
          primaryDisplay={
            <img src="../../node_modules/devicon/icons/react/react-original.svg" />
          }
          hoverDisplay={<div style={{ "font-size": "2rem" }}>8</div>}
          title={"React"}
        />
        <ProgressCircle
          percent={0.9}
          fillColor="#e44d26"
          primaryDisplay={
            <img src="../../node_modules/devicon/icons/html5/html5-plain.svg" />
          }
          hoverDisplay={<div style={{ "font-size": "2rem" }}>9</div>}
          title={"HTML"}
        />
        <ProgressCircle
          percent={0.8}
          fillColor="#1572b6"
          primaryDisplay={
            <img src="../../node_modules/devicon/icons/css3/css3-plain.svg" />
          }
          hoverDisplay={<div style={{ "font-size": "2rem" }}>8</div>}
          title={"CSS"}
        />
        <ProgressCircle
          percent={0.8}
          fillColor="#ffd43b"
          primaryDisplay={<img src={JavaScriptLogo} />}
          hoverDisplay={<div style={{ "font-size": "2rem" }}>8</div>}
          title={"JavaScript"}
        />
        <ProgressCircle
          percent={0.8}
          fillColor="#77bc1f"
          primaryDisplay={
            <img src="../../node_modules/devicon/icons/spring/spring-original.svg" />
          }
          hoverDisplay={<div style={{ "font-size": "2rem" }}>8</div>}
          title={"Spring"}
        />
        <ProgressCircle
          percent={0.8}
          fillColor="#ea2d2e"
          primaryDisplay={
            <img src="../../node_modules/devicon/icons/java/java-plain.svg" />
          }
          hoverDisplay={<div style={{ "font-size": "2rem" }}>8</div>}
          title={"Java"}
        />
        <ProgressCircle
          percent={0.6}
          fillColor="#68217a"
          primaryDisplay={
            <img src="../../node_modules/devicon/icons/csharp/csharp-plain.svg" />
          }
          hoverDisplay={<div style={{ "font-size": "2rem" }}>6</div>}
          title={"C#"}
        />
        <ProgressCircle
          percent={0.4}
          fillColor="#004482"
          primaryDisplay={
            <img src="../../node_modules/devicon/icons/cplusplus/cplusplus-plain.svg" />
          }
          hoverDisplay={<div style={{ "font-size": "2rem" }}>4</div>}
          title={"C++"}
        />
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects-section">
      <h2>Projects</h2>
      <div className="project-card-list">
        <ProjectCard
          imageSource={CodeImage}
          imageAltText="Project image"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum commodi perspiciatis nemo! Doloremque voluptatem non distinctio. Consequuntur repellendus, dicta laboriosam iste architecto nesciunt veniam fugiat, suscipit vel ipsa reprehenderit?"
          githubUrl="https://www.github.com"
          demoUrl="https://www.github.com"
        />
        <ProjectCard
          imageSource={CodeImage}
          imageAltText="Project image"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum commodi perspiciatis nemo! Doloremque voluptatem non distinctio. Consequuntur repellendus, dicta laboriosam iste architecto nesciunt veniam fugiat, suscipit vel ipsa reprehenderit?"
          githubUrl="https://www.github.com"
          demoUrl="https://www.github.com"
        />
        <ProjectCard
          imageSource={CodeImage}
          imageAltText="Project image"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum commodi perspiciatis nemo! Doloremque voluptatem non distinctio. Consequuntur repellendus, dicta laboriosam iste architecto nesciunt veniam fugiat, suscipit vel ipsa reprehenderit?"
          githubUrl="https://www.github.com"
          demoUrl="https://www.github.com"
        />
        <ProjectCard
          imageSource={CodeImage}
          imageAltText="Project image"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum commodi perspiciatis nemo! Doloremque voluptatem non distinctio. Consequuntur repellendus, dicta laboriosam iste architecto nesciunt veniam fugiat, suscipit vel ipsa reprehenderit?"
          githubUrl="https://www.github.com"
          demoUrl="https://www.github.com"
        />
        <ProjectCard
          imageSource={CodeImage}
          imageAltText="Project image"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum commodi perspiciatis nemo! Doloremque voluptatem non distinctio. Consequuntur repellendus, dicta laboriosam iste architecto nesciunt veniam fugiat, suscipit vel ipsa reprehenderit?"
          githubUrl="https://www.github.com"
          demoUrl="https://www.github.com"
        />
        <ProjectCard
          imageSource={CodeImage}
          imageAltText="Project image"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum commodi perspiciatis nemo! Doloremque voluptatem non distinctio. Consequuntur repellendus, dicta laboriosam iste architecto nesciunt veniam fugiat, suscipit vel ipsa reprehenderit?"
          githubUrl="https://www.github.com"
          demoUrl="https://www.github.com"
        />
      </div>
    </section>
  );
}

function ExperienceSection() {
  const accordionEntryDefinitions = [
    new AccordionEntryDefinition(
      "Item 1",
      (
        <div>
          <div>Subitem 1</div>
          <div>Subitem 2</div>
        </div>
      ),
    ),
    new AccordionEntryDefinition(
      "Item 2",
      (
        <div style={{ padding: "1rem" }}>
          <div>Subitem 3</div>
          <div>Subitem 4</div>
        </div>
      ),
    ),
  ];

  return (
    <section id="experience-section">
      <h2>Experience</h2>
      <Accordion accordionEntryDefinitions={accordionEntryDefinitions} />
    </section>
  );
}
