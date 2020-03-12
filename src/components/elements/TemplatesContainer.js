import React,{Component} from "react";
import Template from "./Template";
import arr from "./output";

// const images = importAll(require.context('./nefritistore', false, /\.(png|jpe?g|svg)$/));

// const full = images.map((x,index)=>
// {
//     return (
//             <td key={index}>
//                 {/*<img src={x} alt={'nothing'}/>*/}
//                 <Template image={x} text={"kek"}/>
//             </td>
//     );
// });
const full = arr.map((x,index)=>
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
    console.log(temparray);
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
class TemplatesContainer extends Component{

    render() {

        return new_arr;

}
}
export default TemplatesContainer;