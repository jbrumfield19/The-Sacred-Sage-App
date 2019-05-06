import React from 'react';
  function AnswerOption(props) {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answer}
          id={props.answer}
          value={props.answer}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answer}>
          {props.answerContent}
        </label>
      </li>
    );
  };
  export default AnswerOption;