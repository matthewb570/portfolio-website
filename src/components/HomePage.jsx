import {
  SiCplusplus,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSpring,
} from "@icons-pack/react-simple-icons";
import Accordion, { AccordionEntryDefinition } from "./Accordion";
import ProgressCircle from "./ProgressCircle";
import ProjectCard from "./ProjectCard";
import "../styles/HomePage.css";
import MatthewBurgessImage from "../assets/matthew_burgess.jpg";

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
      <h2>Skills</h2>
      <div className="progress-circle-list">
        <ProgressCircle
          percent={0.4}
          fillColor="#00599C"
          primaryDisplay={<SiCplusplus size={50} />}
          hoverDisplay={<div>C++</div>}
        />
        {/* <ProgressCircle
         percent={0.6}
         fillColor="#663399"
         primaryDisplay={<div>C#</div>}
         hoverDisplay={<div>C#</div>}
       />
       <ProgressCircle
         percent={0.8}
         fillColor="#663399"
         primaryDisplay={<div>Java</div>}
         hoverDisplay={<div>Java</div>}
       /> */}
        <ProgressCircle
          percent={0.9}
          fillColor="#E34F26"
          primaryDisplay={<SiHtml5 size={50} />}
          hoverDisplay={<div>HTML</div>}
        />
        <ProgressCircle
          percent={0.8}
          fillColor="#663399"
          primaryDisplay={<SiCss size={50} />}
          hoverDisplay={<div>CSS</div>}
        />
        <ProgressCircle
          percent={0.8}
          fillColor="#F7DF1E"
          primaryDisplay={<SiJavascript size={50} />}
          hoverDisplay={<div>JavaScript</div>}
        />
        <ProgressCircle
          percent={0.8}
          fillColor="#6DB33F"
          primaryDisplay={<SiSpring size={50} />}
          hoverDisplay={<div>Spring</div>}
        />
        <ProgressCircle
          percent={0.8}
          fillColor="#61DAFB"
          primaryDisplay={<SiReact size={50} />}
          hoverDisplay={<div>React</div>}
        />
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects-section">
      <h2>Projects</h2>
      <ProjectCard
        imageSource=""
        imageAltText="Project image"
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum commodi perspiciatis nemo! Doloremque voluptatem non distinctio. Consequuntur repellendus, dicta laboriosam iste architecto nesciunt veniam fugiat, suscipit vel ipsa reprehenderit?"
        githubUrl="https://www.github.com"
        demoUrl="https://www.github.com"
      />
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
