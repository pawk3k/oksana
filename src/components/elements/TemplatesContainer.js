import React,{Component} from "react";
import Template from "./Template";
import arr from "./output";
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./nefritistore', false, /\.(png|jpe?g|svg)$/));

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
            {/*<img src={x} alt={'nothing'}/>*/}
            <Template image={x.img_url} text={x.caption}/>
        </td>
    );
});

let new_arr = [];
var i,j,temparray,chunk = 3;
for (i=0,j=full.length; i<j-4; i+=chunk) {
    temparray = full.slice(i,i+chunk);
    console.log(temparray);
    new_arr.push(
        <tr>
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