import React from "react";
import './answersOptions.css';
import Translate from 'react-translate-component';

const AnswersOptions = (props) => {
    const options = [
        { text: <Translate content="symptoms"/>, handler: props.actionProvider.handleSymptomsList, id: 1 },
        { text: <Translate content="prevention"/>, handler: props.actionProvider.handlePreventionList, id: 2 },
        { text: <Translate content="vaccine"/>, handler: props.actionProvider.handleVaccineList, id: 3 },
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