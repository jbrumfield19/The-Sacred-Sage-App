import React from 'react'
import QuizContainer from './QuizContainer'
import ProductContainer from './ProductContainer'



export default class HomeContainer extends React.Component{

    
            render(){
                state = {
                    products
                }

                componentDidMount() {
                    fetch("")
                    .then(res => res.json())
                    .then (product => this.setState ({
                        products: products
                    }))
                    }
                
                return (
                    <div>
                    <h1>Hello World</h1>
                    <QuizContainer />
                    <ProductContainer />
                    </div>
                )
            }
        }
        
        
