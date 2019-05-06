import React,{Component} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import QuizContainer from './containers/QuizContainer';

export default class App extends Component {
 

 render(){
  return (
    <div>
    <MainContainer />
    <QuizContainer/>
    </div>
    // <Header/>
    // <Logo/>
  )
  }
}



