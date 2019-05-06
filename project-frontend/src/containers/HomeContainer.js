import React from 'react'
import QuizContainer from './QuizContainer'
import ProductContainer from './ProductContainer'



export default class HomeContainer extends React.Component{
    state = {
        products:[]
    }
    
 render(){
                

    // componentDidMount(){
    //     fetch("")
    //     .then(res => res.json())
    //     .then (product => this.setState ({
    //     products: product
    //     }))
    // }
                
    return (
        <div>
        <h1>Hello World</h1>
        <QuizContainer />
        <ProductContainer />
        </div>
    )
  }
}
        
        
