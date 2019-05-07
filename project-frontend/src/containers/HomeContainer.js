import React from 'react'
import {Link} from 'react-router-dom'

export default class HomeContainer extends React.Component{

    render(){
        return(
            <div className="main-container">
                <h1 className="main-text">THE SACRED SAGE</h1>
                <h2 className="cursive-text">What's your spirit yearning for?</h2>
                <Link to="/quiz">
                    <button className="button">Begin Quiz</button>
                </Link>
            </div>
        )
    }
}

