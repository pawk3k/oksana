import React,{Component} from "react";
import Template from "./Template";
import { connect } from 'react-redux';

// chunk_func(full){
//     let new_arr = [];
//     var i,j,temparray,chunk = 3;
//     for (i=0,j=full.length; i<j-4; i+=chunk) {
//         temparray = full.slice(i,i+chunk);
//         new_arr.push(
//             <tr key={i}>
//                 {
//                     temparray.map( x =>{
//                         return x;
//                     } )
//                 }
//             </tr>
//         )
//     }
//     return new_arr;
// }
class TemplatesContainer extends Component{



    dress = () => {
        this.props.dispatch({ type: 'DRESS' });
    };
    render() {
        const full = this.props.display_arr.map((x,index)=>
        {
            return (
                <td key={index}>
                    <Template image={x.img_url} text={x.caption} my_key={x.key} key={index} />
                </td>
            );
        });
        let new_arr = [];
        var i,j,temparray,chunk = 3;
        for (i=0,j=full.length; i<j-4; i+=chunk) {
            temparray = full.slice(i,i+chunk);
            new_arr.push(
                <tr key={i}>
                    {
                        temparray.map( x =>{
                            return x;
                        } )
                    }
                </tr>
            )
        }

        return (

            <div>
                <button type="button" className="btn btn-primary" onClick={this.dress}>+</button>
                {new_arr};

            </div>
        )
    }
}
function mapStateToProps(state) {
    return( {
        count: state.count,
        display_arr:state.display_arr
    });
}



export default connect(mapStateToProps)(TemplatesContainer);