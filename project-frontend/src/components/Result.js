import React from 'react'
import ProductContainer from '../containers/ProductContainer'



  export default class Result extends React.Component{

    state = {
        bundles: []
    }



     componentDidMount(){
        fetch("http://localhost:3000/ProductBundle")
            .then(res => res.json())
            .then(bundles => this.setState({
                bundles: bundles
            }))
        }

        //     .then( res => 
        //      this.setState({
        //          bundles: res.json()
        //         })
        //     )
        // }


        // getBundle(){
        //     // console.log(this.state.bundles)
        //    const bundle=this.state.bundles.filter(bundle =>(
        //         bundle.name.toLowerCase().includes(this.props.quizResult)
        //     ))
        //     //    return bundle
        // }

      render() {
        console.log(this.state.bundles)
        let allBundles = this.state.bundles
        let bundle = allBundles.find( bundle => bundle.id == this.props.quizResult)
        if(!bundle) return <h1>Loading...</h1>
    return(
        <div>
        <h4>{bundle.description}</h4>
        <h2>{bundle.name}</h2>
                
                <img width="100" src={bundle.image}/> <br/>
                <a href={bundle.url}> Product Link </a>
                
        {/* //<ProductContainer bundle = {bundle}/> */}
        
        </div>


    )
      }
}
