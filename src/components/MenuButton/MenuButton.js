import "./MenuButton.css";
import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

import {FaBars} from 'react-icons/fa';
// import {IoIosClose} from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";

// class MenuButton extends Component{
// render() {
//     return(
//         <div>
//             <button className="glyphicon glyphicon-align-justify" id="roundButton"
//                             onMouseDown={this.props.handleMouseDown}>
//             <FaBars/>
//         </button>
//         </div>
//
//     );
// };
//
// }

const MenuButton = (props) =>{
    const dispatch = useDispatch();

        return (
            <a className="btn btn-primary roundButton"   onMouseDown={() => dispatch({type:'MENU_N'})}>
                {
                    <span className="glyphicon glyphicon-remove-sign">{props.icon}</span>
                }

            </a>
        );


};
export default MenuButton;