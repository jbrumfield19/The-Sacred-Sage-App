import React from 'react';
  function AnswerOption(props) {
    console.log(props.answer.type)
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          // name={props.answer.type}
          checked={props.answerType}
          // id={props.answer.type}
          value={props.answer.type}
          // disabled={props.answer}
          onChange={(event) => props.onAnswerSelected(event)}
        ></input>
        <label className="radioCustomLabel" htmlFor={props.answer} >
          {props.answerContent}
        </label>
      </li>
    );
  };
  export default AnswerOption;