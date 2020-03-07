import React,{Component} from "react";
const numbers = [1,2,3,"kek"];

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./nefritistore', false, /\.(png|jpe?g|svg)$/));

const full = images.map((x,index)=>
{
    return (
            <td key={index}><img src={x} alt={'nothing'}/></td>
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


    // do whatever
}
class Template extends Component{

    render() {
        return new_arr;

}
}
export default Template;