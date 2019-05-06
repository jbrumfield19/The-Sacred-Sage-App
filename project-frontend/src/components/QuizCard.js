import React from 'react';
  function QuizCard(props) {
    return (
      <h2 className="question">{props.content}</h2>
    );
  }
  export default QuizCard;