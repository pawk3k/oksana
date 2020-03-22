import React, { useState } from 'react';
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import {FaBars,FaShoppingBag,FaTimes,FaArrowLeft} from 'react-icons/fa';
import BasketIco from "./BasketIco";
import "./styles.css"
import {Link} from "react-router-dom";
const CartList = (props) =>{
    const dispatch = useDispatch();
    const basket_arr1 = useSelector(state => state.basket_arr,shallowEqual());
    let new_arr = basket_arr1.map( (x,index) => {
        return(


            <div key={index} className="row" style={{backgroundColor: index%2===0 ? "#16C44A" : "#007F26"}}>
                <div className="col-4"><img src={x.img} alt={"kek"} className={'image grow '}/>
                </div>
                <div className="col-3"> {x.price}</div>
                <div className="col-3"> {x.text}</div>
                <div className="col-2" style={{backgroundColor: index%2===0 ? "#007F26" : "#16C44A"}} onMouseDown={() => dispatch({type:"REMOVE_ITEM",payload:index})}><FaTimes/></div>

            </div>

                )
    });
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Link to="/signup">
                            <FaArrowLeft/>
                        </Link>
                    </div>
                    <div className="col-10 align-self-center">Bag<BasketIco/></div>
                    <hr/>
                    {/*<div className="col-6 align-self-center"><BasketIco/></div>/*/}
                </div>
                {new_arr}
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-danger">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartList;