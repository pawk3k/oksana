// import  React,{Component,useState} from "react";
// import { connect } from 'react-redux';
// // import {useState} from "react";
//
// class Counter extends Component {
//
//     increment = () => {
//         this.props.dispatch({ type: 'INCREMENT' });
//     };
//
//     decrement = () => {
//         this.props.dispatch({ type: 'DECREMENT' });
//     };
//
//     render() {
//         return (
//             <div>
//                 <p>{this.props.count}</p>
//                 <button type="button" className="btn btn-primary" onClick={this.increment}>+</button>
//                 <button type="button" className="btn btn-danger" onClick={this.decrement}>-</button>
//             </div>
//         );
//     }
// }
//
// const Counter1 = () =>{
//   const [count,setCount] = useState(0);
//     return(
//         <div>
//             <p>{count}</p>
//             <button type="button" className="btn btn-primary" onClick={setCount(count+1)}>+</button>
//             <button type="button" className="btn btn-danger" onClick={setCount(count -1)}>-</button>
//         </div>
//     );
// };

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
// function mapStateToProps(state) {
//     return( {
//         count: state.count,
//         display_arr:state.display_arr
//     });
// }

export default Counter;
// export default connect(mapStateToProps)(Counter1);
