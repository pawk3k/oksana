// import React from 'react';
import './App.css';
import React, { Component } from "react";


const THead = () =>{
  return(
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>

  </thead>
  )
};

const TableBody = props => {
  const rows = props.characters.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    return (
      <div>
        <table>
      <THead/>
      <TableBody characters={this.props.characters} removeCharacter = {this.props.removeCharacter}/>
      </table>
      </div>
    );
  }
}

// render(<App />, document.getElementById("root"));


export default Table;
