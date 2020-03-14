import React,{Component} from "react";

import "./Menu.css"
class Menu extends Component{
render() {
    let visibility = "hide";

    if(this.props.menuVisibility){
        visibility = "show";
    }

    return (
        <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
            <h2>Bags</h2>
            <h2>Dress</h2>
            <h2>Pants</h2>
            <h2>Skirt</h2>
            <h2>Jacket</h2>

        </div>
    )
}
}
export default Menu;