import "./MenuButton.css";
import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

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