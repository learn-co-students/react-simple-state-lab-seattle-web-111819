// import React, { Component } from 'react';
import React from 'react';
import Cell from './Cell.js' // STEP 4

 class Matrix extends React.Component {
  
  // STEP 3
  genRow = (vals) => (
    // console.log(vals)
    vals.map(val => <Cell value={val} />)
    // vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  )
  
  // STEP 2
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

// STEP 1
Matrix.defaultProps = {
  values: (() => {
    const row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(row))
  }) ()
}

export default Matrix;