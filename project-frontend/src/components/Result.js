import React from 'react'



  export default class Result extends React.Component{

    state = {
        bundles: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/ProductBundle")
            .then( res => res.json())
            .then( bundles => this.setState({
            bundles: bundles
        }))
        }

        getBundle(){
            this.state.bundles.filter(bundle =>(
                bundle.toLowerCase().includes(this.props.quizResult)
            ))

        }

      render() {
          
    return(
        <div>
        <h4>It looks like you could use more <strong>{this.props.quizResult}</strong> in your life!</h4>
        </div>

    )
      }
}
