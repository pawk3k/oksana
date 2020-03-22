import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

const Counter = props =>{
    // its like dipatch
    const dispatch = useDispatch();
    //Use Selector is like map state to props
    const counter = useSelector(state => state.count);
    return (
        <div>
            <p>{counter}</p>
            <button type="button" className="btn btn-primary" onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button type="button" className="btn btn-danger" onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </div>
    )
};
export default Counter;
