import arr from "../Template/output";
import React, { useState } from 'react';
import "./News.css"
import {useDispatch, useSelector} from "react-redux";
import Template from "../Template/Template";

const News = (props) =>{

    function changeBackground(e) {
        e.target.style.opacity = "1";
    }
    const full = arr.map((x,index)=>
    {
        return (
            <div key={index} className="col-4">
                <Template className="grow" image={x.img_url} text={x.caption} my_key={x.key} key={index}/>
            </div>
        );
    });
    let new_arr =[];
    for (let i = 0; i <3; i++) {
        new_arr.push(full.pop());
    }
  return(
      <div className="row">

              {new_arr}

      </div>
  )
};
export default News;