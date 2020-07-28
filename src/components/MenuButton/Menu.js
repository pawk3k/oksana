import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./Menu.css"
import { IoIosClose } from "react-icons/io";
import MenuButton from "./MenuButton";

const Menu =(props) =>{
    const [visibility,setVisibility] = useState(false);
    // let visibility = "hide";
    const dispatch = useDispatch();
    const visibility_m = useSelector(state => state.visibility_m);
    // if(props.menuVisibility){
    //     visibility = "show";
    // }

    return(
        <div id="flyoutMenu" className={visibility_m}>
            <div className='container-fluid'>
                <MenuButton icon={<IoIosClose/>}/>
                <div className="h-15 p-3">
                    <button type="button" className="btn btn-primary block h-50 p-3" onMouseDown={() => {dispatch({type:'DRESS'});dispatch({type:'MENU_N'})} }>Dress</button>
                </div>
                <div className="h-20 p-3">
                    <button type="button" className="btn btn-primary block h-50 p-3" onMouseDown={() => dispatch({type:'DRESS'}) }>Bags</button>
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