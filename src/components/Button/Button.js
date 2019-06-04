import React from 'react';
import './Button.css';
const Button=(props)=>{
    return(
        <button onClick={props.myClick} className={props.attributs.className} type={props.attributs.type}>{props.attributs.text}</button>
    )
};

export default Button;