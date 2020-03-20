import '../../App.css';
import React, { Component ,useState} from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu"
import {FaBars} from 'react-icons/fa';

import TemplatesContainer from "../Template/TemplatesContainer";
import arr from "../Template/output"

export const svg = (<svg className="bi bi-chevron-right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
          clipRule="evenodd"/>
            </svg>);

const MenuCont = (props) =>{
    const [visible,setVisible]  = useState(false);
    return (
        <div className="container-sm" style={{alignItems:'center', justifyContent:'center',display: 'block'}}>
            <MenuButton handleMouseDown={()=>setVisible(!visible)} icon={<FaBars/>}/>
            <TemplatesContainer  style={{alignItems:'center', justifyContent:'center',display: 'block'}} />
            <Menu handleMouseDown={ () =>setVisible(!visible)} menuVisibility={visible}/>
        </div>

    );

};



export default MenuCont;
