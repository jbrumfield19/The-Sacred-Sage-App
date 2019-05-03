import React from 'react'
class QuizContainer {
    render(){
    return (
       <div className="quizlist">
         <QuestionCount
           counter={this.props.questionId}
           total={this.props.questionTotal}
         />
         <Question content={this.props.question} />
         <ul className="answerOptions">
           {this.props.answerOptions.map(renderAnswerOptions)}
         </ul>
       </div>
    );
  }
  QuizContainer.propTypes = {
    answer: React.PropTypes.string.isRequired,
    answerOptions: React.PropTypes.array.isRequired,
    counter: React.PropTypes.number.isRequired,
    question: React.PropTypes.string.isRequired,
    questionId: React.PropTypes.number.isRequired,
    questionTotal: React.PropTypes.number.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
  };
}
  export default QuizContainer;