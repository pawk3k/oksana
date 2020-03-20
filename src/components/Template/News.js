import arr from "./output";
import React, { useState } from 'react';
import "./News.css"
import {useDispatch, useSelector} from "react-redux";
import Template from "./Template";

const News = (props) =>{

    function changeBackground(e) {
        e.target.style.opacity = "1";
    }
    const full = arr.map((x,index)=>
    {
        return (
            <td key={index}>
                <Template className="grow" image={x.img_url} text={x.caption} my_key={x.key} key={index}/>
            </td>
        );
    });
    let new_arr =[];
    for (let i = 0; i <3; i++) {
        new_arr.push(full.pop());
    }
  return(
      <div>
          <table>
              <tbody>
              {new_arr}
              </tbody>
          </table>
      </div>
  )
};
export default News;