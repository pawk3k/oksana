import React,{Component} from "react";

import "./Menu.css"
class Menu extends Component{
render() {
    var visibility = "hide";

    if(this.props.menuVisibility){
        visibility = "show";
    }

    return (
        <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
            <h2>G1</h2>
            <h2>G2</h2>
            <h2>G3</h2>
            <h2>G4</h2>

        </div>
    )
}
}
export default Menu;