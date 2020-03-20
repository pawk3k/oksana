// import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
// import React from 'react'
//TODO change all Components to Function components
import './App.css';
import { createStore } from 'redux';
import Main from "./components/Main/Main";
import { Provider } from 'react-redux';
import ParalaxMy from "./components/elements/ParallaxMy";
import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import { render } from "react-dom";
import "./components/Template/TemplatesContainer"
import arr from "./components/Template/output"
import { Switch, Route ,Link} from 'react-router-dom';
import {arr1} from "./components/Template/output";

const initialState = {
    count: 0,
    display_arr : arr,
    visibility_m: "hide"
};

function reducer(state=initialState,action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'DRESS':
            return {
                ...state,
                display_arr: arr1
            };
        case 'MENU_N':
            if(state.visibility_m === "hide"){
                return {
                    ...state,
                    visibility_m: "show"
                }
            }else{
                return {
                    ...state,
                    visibility_m: "hide"
                }
            }
        case 'MENU_V':
            return{
                ...state
            };

        default:
            return state;
    }
}

const store = createStore(reducer);


class App extends Component {

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
        <Provider store={store}>
            <BrowserRouter>
              <div>
                <Main/>
              </div>
            </BrowserRouter>
        </Provider>
    );
  }
}
render(<App />, document.getElementById("root"));


export default App;
