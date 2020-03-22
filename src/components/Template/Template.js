import React,{Component,useState} from "react";
import "./Template.css"
import {useDispatch, useSelector} from "react-redux";
import {FaBars,FaShoppingBag} from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
import "./News.css"

const  Template = (props) =>{
    const [visible,setV] = useState(false);
    const dispatch = useDispatch();
    const k = 3;
    return (
        <div>
            <div className="container" onMouseEnter={() =>setV(!visible)} onMouseLeave={() =>setV(!visible)}>
                <img src={props.image} alt={"kek"} className={'image grow '}/>
                    <button onMouseDown={() => dispatch({type:'INCQ',item:{price:"3$" ,img: props.image, text:"kek"}})} className={'btn btn-primary ' } style={{visibility: visible ? "visible": "hidden"} } >+</button>
            </div>
        </div>
  )
};

export default Template;