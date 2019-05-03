import React from 'react';
  function QuizCard(props) {
    return (
      <h2 className="question">{props.content}</h2>
    );
  }
  QuizCard.propTypes = {
    content: React.PropTypes.string.isRequired
  };
  export default QuizCard;