import React from 'react'; 



export default class ProductCard extends React.Component{

    render(){
        //const product= this.props.getBundle()
        return(
            <div>
                <h3>We Recommend that you purchase</h3>

                <h2>{this.props.name}</h2>
                <h2>{this.props.description}</h2>
                <img width="100" src={this.props.image}/> <br/>
                <a href={this.props.url}> Product Link </a>
                

            </div>
        )
    }
}