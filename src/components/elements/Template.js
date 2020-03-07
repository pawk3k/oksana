import React,{Component} from "react";
import "./Template.css"


class Template extends Component{

    render() {
        return(
        <div id="my_id">
            <img src={this.props.image} alt={"kek"}/>
            <p>{this.props.text}</p>
            <p>99999zł</p>
        </div>
        )}
}
export default Template;