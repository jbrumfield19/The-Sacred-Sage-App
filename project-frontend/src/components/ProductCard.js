import React from 'react'; 



export default class ProductCard extends React.Component{

    render(){
        return(
            <div>
                <h3>We Recommend that you purchase</h3>
                <h2>ProductBundle name:</h2>
                <h2>Description</h2>
                <img width="100" src={this.props.image}/>
                <url>{this.props.url}</url>
            </div>
        )
    }
}