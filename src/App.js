// import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
// import React from 'react'
import './App.css';
import ParalaxMy from "./components/elements/ParallaxMy";
import React, { Component } from "react";
import { render } from "react-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import "./components/elements/TemplatesContainer"
import MenuCont from "./components/MenuButton/MenuCont";

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
        // <ParallaxProvider>
      <div>
        <ParalaxMy/>
        {/*<MenuCont/>*/}

      </div>
        // {/*<TemplatesContainer/>*/}
        // {/*<Table characters={this.state.characters} removeCharacter = {this.removeCharacter} />*/}
        // {/*<Form handleSubmit = {this.handleSubmit}/>*/}
    // </ParallaxProvider>);
    );
  }
}



render(<App />, document.getElementById("root"));


export default App;
