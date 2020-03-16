import React,{Component} from "react"
import "./MenuButton.css";

import {FaBars} from 'react-icons/fa';
// import {IoIosClose} from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";

// class MenuButton extends Component{
// render() {
//     return(
//         <div>
//             <button className="glyphicon glyphicon-align-justify" id="roundButton"
//                             onMouseDown={this.props.handleMouseDown}>
//             <FaBars/>
//         </button>
//         </div>
//
//     );
// };
//
// }

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCardView: false,
        };
    }

    render() {
        return (
            <a className="btn btn-primary roundButton" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}  onMouseDown={this.props.handleMouseDown}>
                { this.state.isCardView
                    ? <span className="glyphicon glyphicon-remove-sign"><FaBars/></span>
                    : <span className="glyphicon glyphicon-ok-sign" ><IoIosClose/> </span>
                }

            </a>
        );
    }

}
export default MenuButton;