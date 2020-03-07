// import React from 'react';
import './App.css';
import React, { Component } from "react";
import { render } from "react-dom";
import Table from "./components/Table";
import Form from "./components/Form";
import "./components/elements/TemplatesContainer"
import MenuCont from "./components/MenuButton/MenuCont";
import TemplatesContainer from "./components/elements/TemplatesContainer";
class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  };
  removeCharacter = index => {
  const { characters } = this.state;

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
};
  handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character] })
};


  render() {
    return (
      <div className="container">
        <MenuCont/>

        {/*<TemplatesContainer/>*/}
        {/*<Table characters={this.state.characters} removeCharacter = {this.removeCharacter} />*/}
        {/*<Form handleSubmit = {this.handleSubmit}/>*/}
      </div>
    );
  }
}



render(<App />, document.getElementById("root"));


export default App;
