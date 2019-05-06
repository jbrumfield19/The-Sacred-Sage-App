import React from 'react'
import ProductCard from '../components/ProductCard'



export default class ProductContainer extends React.Component{
    
    render(){
        return(
            this.props.allProducts.map(products => (
                <ProductCard 
                {...products}/>
            ))
            
        )
    }
}