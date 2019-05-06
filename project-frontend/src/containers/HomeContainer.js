import React from 'react'
import QuizContainer from './QuizContainer'
import ProductContainer from './ProductContainer'



export default class HomeContainer extends React.Component{

    
        state = {
            products: []
        }


    componentDidMount(){
        fetch("http://localhost:3000/ProductBundle")
            .then( res => res.json())
            .then( products => this.setState({
            products: products
        }))
    }
    
        render(){
                let allProducts = this.state.products

            return (
                    <div>
                    <h1>Hello World</h1>
                    <QuizContainer />
                    <ProductContainer allProducts = {allProducts}/>
                    </div>
                )
            }
        }
        
    
        
