import React from "react";
import './answersOptions.css';

const AnswersOptions = (props) => {
    const options = [
        { text: "Symptoms", handler: props.actionProvider.handleSymptomsList, id: 1 },
        { text: "Prevention", handler: props.actionProvider.handlePreventionList, id: 2 },
        { text: "Vaccine Progress", handler: () => {}, id: 3 },
    ];

    const optionsMarkup = options.map((option) => (
        <button
          className="answers-option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
    ));

    return <div className="answers-options-container">{optionsMarkup}</div>;
}

export default AnswersOptions