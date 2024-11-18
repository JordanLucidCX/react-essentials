import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import ConceptPreview from "../ConceptPreview/ConceptPreview";
import { TAB_BUTTONS } from "../../data/tabButtonData";
import { DYNAMIC_CONTENTS } from "../../data/dynamicContentData";
import Section from "../Section/Section";
import "./examples.css";

function Examples() {
    const [selectedButtonTitle, setSelectedButtonTitle] = useState();
    const [selectedTabContent, setSelectedTabContent] = useState();

    function handleClick(selectedButton) {
        setSelectedButtonTitle(selectedButton.title);

        const content = DYNAMIC_CONTENTS.find(content => content.buttonId == selectedButton.id);

        if (content != null) setSelectedTabContent(content);
    }

    let renderedTabContent = selectedTabContent ?
        <ConceptPreview
            selectedButtonTitle={selectedButtonTitle}
            tabContentDescription={selectedTabContent.description}
            tabContentCode={selectedTabContent.code} />
        :
        <p>Please select a topic.</p>;

    return (
        <Section id="examples" title="Examples">
            <menu>
                {TAB_BUTTONS.map(({ id, title }) => <TabButton key={id} onClick={() => handleClick({ id, title })} isSelected={selectedTabContent?.buttonId === id}>{title}</TabButton>)}
            </menu>
            {renderedTabContent}
        </Section>
    );
}

export default Examples;