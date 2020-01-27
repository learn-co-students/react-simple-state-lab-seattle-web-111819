import React from 'react'
// import Data from './data.js'


class Cell extends React.Component {

constructor(props){
    super()
    this.state = {
        color: props.value
    }
}

handleClick = ()=>{
    this.setState({
        color: '#333'
    })
}



    render(){
        return(
            <div 
            className="cell"
           style={{backgroundColor: this.state.color}}
           onClick= {this.handleClick}>
            </div>
        )
        }
}

export default Cell

