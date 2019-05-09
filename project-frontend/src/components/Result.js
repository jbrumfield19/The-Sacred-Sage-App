import React from 'react'
//import ProductContainer from '../containers/ProductContainer'



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
        console.log(this.props.quizResult)
        let allBundles = this.state.bundles
        let bundle = allBundles.find( bundle => bundle.id == this.props.quizResult)
        if(!bundle) return <h1>It seems that you have balance in your life! That's great!</h1>
    return(
        <div className="productBundle"><br/>
        <strong><h1 className="nameStyle">{bundle.name}</h1></strong>
        <h4 className="productDescriptionOne">{bundle.descriptionone}</h4>
        <h4 className="productDescriptionTwo">{bundle.descriptiontwo}</h4>
        <h4 className="productDescriptionThree">{bundle.descriptionthree}</h4>
        
        <span>
                <img className="image" src={bundle.image} alt=''/> <br />
                </span>

                <button className="otherButton"><a className='link' href={bundle.url}>Purchase Now</a></button>
                
        {/* //<ProductContainer bundle = {bundle}/> */}
        
        </div>


                {/* //<ProductContainer bundle = {bundle}/> */}

            </div>


        )
    }
}
