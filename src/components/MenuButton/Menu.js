import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./Menu.css"
import MenuButton from "./MenuButton";
import {connect} from "react-redux";
// class Menu extends Component{
//
//     dress = () => {
//         this.props.dispatch({ type: 'DRESS' });
//     };
//     render() {
//         let visibility = "hide";
//
//         if(this.props.menuVisibility){
//             visibility = "show";
//         }
//
//         return (
//
//             <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
//                 <div className='container-fluid'>
//                 <MenuButton/>
//                 <div className='col col-sm'>
//                     <button type="button" className="btn btn-primary block" onMouseDown={}>Dress</button>
//                 </div>
//                     <div className='col col-sm'>
//                         <button type="button" className="btn btn-primary block" onMouseDown={this.dress}>Bags</button>
//                     </div>
//
//                 <button type="button" className="btn btn-primary block" onClick={this.dress}>Bags</button>
//                 <button type="button" className="btn btn-primary block" onClick={this.dress}>Pants</button>
//                 <button type="button" className="btn btn-primary block" onClick={this.dress}>Skirt</button>
//                 <button type="button" className="btn btn-primary block" onClick={this.dress}>Jacket</button>
//                 <div className="btn-group-vertical" role="group" aria-label="Basic example">
//                     <button type="button" className="btn btn-secondary">Left</button>
//                     <button type="button" className="btn btn-secondary">Middle</button>
//                     <button type="button" className="btn btn-secondary">Right</button>
//                 </div>
//                 <h2>Bags</h2>
//                 <h2>Dress</h2>
//                 <h2>Pants</h2>
//                 <h2>Skirt</h2>
//                 <h2>Jacket</h2>
//                 </div>
//             </div>
//         )
//         }
// }
const Menu =(props) =>{
    let visibility = "hide";
    const dispatch = useDispatch();
    if(props.menuVisibility){
        visibility = "show";
    }
    return(
        <div id="flyoutMenu" onMouseDown={props.handleMouseDown} className={visibility}>
            <div className='container-fluid'>
                <MenuButton/>
                <div className="h-15 p-3">
                    <button type="button" className="btn btn-primary block h-50 p-3" onMouseDown={() => dispatch({type:'DRESS'})}>Dress</button>
                </div>
                <div className="h-20 p-3">
                    <button type="button" className="btn btn-primary block h-50 p-3" onMouseDown={() => dispatch({type:'DRESS'})}>Bags</button>
                </div>
                <div className="h-20 p-3">
                    <button type="button" className="btn btn-primary block h-50 p-3" onMouseDown={() => dispatch({type:'DRESS'})}>Pants</button>
                </div>
                <div className="h-20 p-3">
                    <button type="button" className="btn btn-primary block h-50 p-3" onMouseDown={() => dispatch({type:'DRESS'})}>Skirt</button>
                </div>
                <div className="h-20 p-3">
                    <button type="button" className="btn btn-primary block h-50 p-3" onMouseDown={() => dispatch({type:'DRESS'})}>Jacket</button>
                </div>
            </div>
        </div>
    )


};

export default Menu;
// function mapStateToProps(state) {
//     return( {
//         count: state.count,
//         display_arr: state.display_arr
//     });
// }
//
// export default connect(mapStateToProps)(Menu);