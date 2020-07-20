import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import MenuButton from "../MenuButton/MenuButton";
import {FaArrowRight} from 'react-icons/fa';
const ArrowButton = (props) =>{
    const [visibility,setVisibility] = useState(false);
    return(
        <div onMouseEnter={()=>{setVisibility(!visibility)}} onMouseLeave={()=>{setVisibility(!visibility)}}>
            <button variant="outlined"  className={"btn btn-success"}  >
                Shop <FaArrowRight style={{visibility: visibility ? "visible": "hidden"}}/>
            </button>
        </div>
    )


};
export default ArrowButton