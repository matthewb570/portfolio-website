import { useState } from "react";
import "../styles/Accordion.css";

export default function Accordion({ accordionEntryDefinitions }) {
  // TODO: Render accordionEntryDefinitions
  return (
    <div className="accordion">
      <AccordionEntry
        title={"test title"}
        content={<div style={{ padding: "5rem" }}>test content</div>}
      />
      <AccordionEntry
        title={"test title 2"}
        content={
          <div style={{ padding: "5rem" }}>
            <div>test content 2</div>
            <div>test content 2</div>
          </div>
        }
      />
    </div>
  );
}

function AccordionEntry({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-entry ${isOpen ? "open" : "closed"}`}>
      <div className="title-bar" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <div className={`content-wrapper`}>
        <div className={`content`}>{content}</div>
      </div>
    </div>
  );
}

class AccordionEntryDefinition {
  title;
  content;

  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}
