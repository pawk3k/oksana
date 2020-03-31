import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

const NewShop = props =>{
    // its like dipatch
    const dispatch = useDispatch();
    //Use Selector is like map state to props
    const arr = useSelector(state => state.new_shop_arr);
    return (
        <div>
            <p>k{console.log(arr)}</p>
            {/*<img src={require( arr[0].name)} alt="kek"/>*/}
            {/*<p>{counter}</p>*/}
            {/*<button type="button" className="btn btn-primary" onClick={() => dispatch({type: 'INCREMENT'})}>+</button>*/}
            {/*<button type="button" className="btn btn-danger" onClick={() => dispatch({type: 'DECREMENT'})}>-</button>*/}
        </div>
    )
};
export default NewShop;
