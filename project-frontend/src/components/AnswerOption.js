import React from 'react';
  const AnswerOption=(props)=> {
    
    const answerType=()=>{
      console.log(props.answerContent)
      if(props.answerContent.includes('https://')){

      return  <img className='picture' src={props.answerContent} alt='' />
      }
      else{
        return <p>{props.answerContent}</p>
      }
    }
    return (
      <li className="answerOption" onClick={() => props.onAnswerSelected(props)}>
        <input
          type="radio"
          className="radioCustomButton"
          // name={props.answer.type}
          defaultChecked={props.answer.type===props.answer}
          // id={props.answer.type}
          value={props.answer}
          

          // disabled={props.answer}
          
        ></input>
        <label className="radioCustomLabel" htmlFor={props.answer} >
          {answerType()}
        </label>
      </li>
    );
  };
  export default AnswerOption;