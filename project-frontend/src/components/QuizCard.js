import React from 'react';
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOption';
  function QuizCard(props) {
      function renderAnswerOptions(key){
          return(
              <AnswerOption key={key.content} answerContent={key.content} answer={props.answer}
              questionId={props.questionId} onAnswerSelected={props.onAnswerSelected} type={props.type}/>
          )
      }
    return (
        <div key={props.questionId} >
        <QuestionCount counter={props.questionId} total={props.questionTotal}/>
      <h2 className="question">{props.content}</h2>
        <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    );
  }
  export default QuizCard;
