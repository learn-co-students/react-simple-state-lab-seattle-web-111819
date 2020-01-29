import React, { Component } from 'react'

class Cell extends Component {
    // STEP 1: define constructor and add super() in order to use this.state
    constructor(props) {
        super()
        this.state = {
            // STEP 2: define initial state with a key of 'color' set to the 'value' prop
            color: props.value
         }
    }

    handleClick = () => {
        // STEP 3: click listener which, when activated, updates the state to the following hex value: '#333'
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (

        <div className="cell" 
        style={{backgroundColor: this.state.color}} 
        // STEP 4: add event handler
        onClick={this.handleClick}>
        </div>
        
        )
    }
}

export default Cell