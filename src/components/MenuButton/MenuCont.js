import '../../App.css';
import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu"
import TemplatesContainer from "../elements/TemplatesContainer";
import arr from "../elements/output"


class MenuCont extends Component {


    constructor(props) {
    super(props);

    this.state = {
        visible: false,
        dani: [0]
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
        console.log(arr);
        e.stopPropagation();
  }


  render() {
    return (
        <div>
            <MenuButton handleMouseDown={this.handleMouseDown}/>
            <TemplatesContainer cont={this.state.dani}/>
            <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        </div>

  );
  }
}



export default MenuCont;
