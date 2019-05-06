import React,{Component} from 'react';
import './App.css';
import Header from './components/Header'
import HomeContainer from './containers/HomeContainer'

export default class App extends Component {
 
   render(){
     return(
    <div className="App">
        <Header/>
        <HomeContainer />

    </div>
     
    // <Header/>
    // <Logo/>
  )
  }
}



