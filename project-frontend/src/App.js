import React,{Component} from 'react';
import './App.css';
import Header from './components/Header'
import HomeContainer from './containers/HomeContainer'

class App extends Component {
  render(){
  return (

    <div className="App">
        <Header/>
        <HomeContainer />

    </div>


    );
  }
}

export default App;
