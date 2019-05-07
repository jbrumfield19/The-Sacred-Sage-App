import React from 'react';
  function AnswerOption(props) {
    //console.log(props.answer)
    return (
      <li className="answerOption" onClick={() => props.onAnswerSelected(props)}>
        <input
          type="radio"
          className="radioCustomButton"
          // name={props.answer.type}
          checked={props.answer.type===props.answer}
          // id={props.answer.type}
          value={props.answer}
          

          // disabled={props.answer}
          
        ></input>
        <label className="radioCustomLabel" htmlFor={props.answer} >
          {props.answerContent}
        </label>
      </li>
    );
  };
  export default AnswerOption;