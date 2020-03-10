import React,{Component} from "react";
import "./Template.css"
// import { FaInstagram } from 'react-icons/fa';

class Template extends Component{
    state={
      visibility_my:false,
        my_opacity:false
    };
    handleMouseEnter  = () => {this.setState({visibility_my:!this.state.visibility_my,
                                                    my_opacity:!this.state.my_opacity
    });
    };
    handleMouseLeave = () => {this.setState({visibility_my:!this.state.visibility_my,
                                                    my_opacity:!this.state.my_opacity
    })};
    render() {
        let visibility = "hide";
        let opacity = "opacity1";
        if(this.state.visibility_my){
            visibility = "show";
        }
        if(this.state.my_opacity){
            opacity = "opacity50";
        }
        return(
                <div>
                        <div className="container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
                            <img src={this.props.image} alt={"kek"} className={'image ' + opacity}/>
                            <div className="overlay" >
                                <a href={this.props.my_key} className="icon" title="instagram">
                                    <i className={'fa fa-instagram ' + visibility}/>
                                </a>
                            </div>
                        </div>
                </div>
        )}
}
export default Template;