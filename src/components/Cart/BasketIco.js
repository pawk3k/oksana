import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FaBars,FaShoppingBag} from 'react-icons/fa';

const CartButton = (props) =>{
    const dispatch = useDispatch();
    const quantity = useSelector(state => state.quantity);
    return (
        <div>
            <p>
                <FaShoppingBag/>
            </p>
            <p>
                <span>{quantity}</span>
            </p>
        </div>
                //
                //
                // <span className="container">
                //     <div className="row">
                //         <FaShoppingBag/>
                //     </div>
                //     <div className="row">
                //         <span>{quantity}</span>
                //     </div>
                // </span>
    );

};


const BasketIco = props =>{
    // its like dipatch
    const dispatch = useDispatch();
    //Use Selector is like map state to props
    return (
        <div>
            <CartButton/>
        </div>
    )
};
export default BasketIco;
