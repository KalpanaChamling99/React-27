import React from 'react';

const Button = (props) =>{
    return(
        <button className = {props.classname} onClick = {props.onClick}>{props.button}</button>
    ) 
}


export default Button;