import '../App.css';
import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu"

class MenuCont extends Component {


    constructor(props) {
    super(props);

    this.state = {
        visible : false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(){
        this.setState({
            visible:!this.state.visible
        })
  }
  handleMouseDown(e){
        this.toggleMenu();
        console.log("clicked");
        e.stopPropagation();
  }


  render() {
    return (
        <div>
            <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
            <MenuButton handleMouseDown={this.handleMouseDown}/>

        </div>

  );
  }
}



export default MenuCont;
