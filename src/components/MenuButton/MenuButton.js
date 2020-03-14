import React,{Component} from "react"
import "./MenuButton.css";

import {FaBars} from 'react-icons/fa';
class MenuButton extends Component{
render() {
    return(
        <div>
            <button className="glyphicon glyphicon-align-justify" id="roundButton"
                            onMouseDown={this.props.handleMouseDown}>
            <FaBars/>
        </button>
        </div>

    );
};


}
export default MenuButton;