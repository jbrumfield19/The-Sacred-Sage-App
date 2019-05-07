import React,{Component} from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import QuizContainer from './containers/QuizContainer'
import ProductContainer from './containers/ProductContainer'
import { BrowserRouter, Route } from 'react-router-dom'


export default class App extends Component {

    render() {
        return (
            <div className="App">

                <BrowserRouter>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route path="/quiz" component={QuizContainer}/>
                    <Route path="/product" component={ProductContainer}/>
                </BrowserRouter>

            </div>

        );
    }
}



