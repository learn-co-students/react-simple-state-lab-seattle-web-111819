import React, { Component } from 'react'
import Cell from './Cell.js' // STEP 3: create and import Cell component

 class Matrix extends Component {
  
  // STEP 4: add Cell component return value prop
  genRow = (vals) => (
    // console.log(vals)
    vals.map(val => <Cell value={val} />)
    // vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  )
  
  // STEP 1: console.log() genMatrix to check values
  // genMatrix in an instance method which maps "this.props.values" to an array of JSX
  // Every row in "this.props.values" will create a <div className="row">
  genMatrix = () => (
    // console.log(this.props.values)
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

// STEP 2: add defaultProps
Matrix.defaultProps = {
  values: (() => {
    const row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(row))
  }) ()
}

export default Matrix