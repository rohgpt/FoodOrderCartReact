import React from 'react';
import './style.css'
const card = (props) => {
  return <div className="container" >
    <img className="img" src={props.img} alt="" />
    <div className="desc"><p className="head">   {props.title}</p><br />
      <p>   {props.description}</p></div>
  </div>
}
export default card;