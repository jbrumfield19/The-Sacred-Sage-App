import React from 'react'
import AnswerOptions from '../components/AnswerOption'
import QuizCard from '../components/QuizCard'
export default class QuizContainer extends 
React.Component{
    
        state = {
          counter: 0,
          questionId: 1,
          question: ['What are you most likely to do after you’ve done something wrong at work?','What is your least favorite color?','Which affirmation would you like to most resonate with?','How do you feel about your life?','What’s your most ideal vacation? ','In what area of the body do you feel the most discomfort?'],
          answerOptions: [],
          answer: '',
          answersCount: {
            Nintendo: 0,
            Microsoft: 0,
            Sony: 0
          },
          result: ''
       
    }
    render(){
    return (
        <div className="quizlist">
        
        {this.state.question.map(question=><QuizCard content={question}/>)}
        <ul className="answerOptions">
    <li>{this.state.answerOptions.map(answer=><AnswerOptions answer={answer}/>)}</li>
        </ul>
      </div>  
    );
    }       
  
}
 


