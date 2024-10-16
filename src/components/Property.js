import React from "react";
const Property = (props)=>{
    console.log(props); // passing data from parent 
    // props.name="Sanmira" // it showing error can not assign  read only property , bcz props is immutable
    return (
    <div>
        <h1>Hello {props.name}</h1> 
        {props.children} {/* showing the children element which are present between <Property></Property> odf App.js which is the inner html of this */}
        </div>
      ) // {} jsx features
}
export default Property