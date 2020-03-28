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
let arr2 =[];
const initialState = {
    count: 0,// for counter
    quantity:0, // number of items in buscket
    display_arr : arr, // arr that is displayed in shop
    visibility_m: "hide", //visibility of menu
    basket_arr:[]
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
        case "INCQ":
            const new_arr = state.basket_arr;
            new_arr.push(action.item);
            const {img,text,price} = action.item;
            console.log(price);
            console.log(text);
            return {
                ...state,
                basket_arr: new_arr,
              quantity: state.quantity + 1
            };
        case "REMOVE_ITEM":
            let new_arr2 = state.basket_arr;
            let new_arr3 = new_arr2;
            let removed = new_arr3.splice(action.payload,1);
            console.log(removed);
            console.log(new_arr3);
            return {
                ...state,
                quantity: state.quantity -1,
                basket_arr: new_arr3
            };
        case "ADD_I_DB":
            arr2.push(action.payload)
            // let my_new = stat

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
