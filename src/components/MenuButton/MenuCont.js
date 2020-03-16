import '../../App.css';
import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu"
import TemplatesContainer from "../Template/TemplatesContainer";
import arr from "../Template/output"


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
        e.stopPropagation();
  }


  render() {
    return (
        <div className="container-sm" style={{alignItems:'center', justifyContent:'center',display: 'block'}}>
            <MenuButton handleMouseDown={this.handleMouseDown} />
            <TemplatesContainer cont={this.state.dani} style={{alignItems:'center', justifyContent:'center',display: 'block'}} />
            <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        </div>

  );
  }
}



export default MenuCont;
