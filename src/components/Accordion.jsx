import { useState } from "react";
import "../styles/Accordion.css";

export default function Accordion({ accordionEntryDefinitions }) {
  return (
    <div className="accordion">
      {accordionEntryDefinitions?.map((accordionEntryDefinition) => {
        return (
          <AccordionEntry
            title={accordionEntryDefinition.title}
            content={accordionEntryDefinition.content}
            key={accordionEntryDefinition.title}
          />
        );
      })}
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

export class AccordionEntryDefinition {
  title;
  content;

  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}
