import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            // define initial state with a key of 'color' set to the 'value' prop
            color: props.value
         }
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (

            <div className="cell" 
        style={{backgroundColor: this.state.color}} 
        onClick={this.handleClick}>
        </div>
        
        )
    }
}

export default Cell;