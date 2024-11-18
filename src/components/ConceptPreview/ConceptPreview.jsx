import "./concept-preview.css";

function ConceptPreview({selectedButtonTitle, tabContentDescription, tabContentCode}) {
    return (
        <div id="tab-content">
            <h3>{selectedButtonTitle}</h3>
            <p>{tabContentDescription}</p>
            <pre>
                <code>
                    {tabContentCode}
                </code>
            </pre>
        </div>
    );
}

export default ConceptPreview;