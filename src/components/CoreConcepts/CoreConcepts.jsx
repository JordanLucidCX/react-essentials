import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data/coreConceptsData";
import Section from "../Section/Section";
import "./core-concepts.css";

function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
            {CORE_CONCEPTS.map(({ id, image, title, description }) => <CoreConcept key={id} image={image} title={title} description={description} />)}
          </ul>
        </Section>
    );
}

export default CoreConcepts;