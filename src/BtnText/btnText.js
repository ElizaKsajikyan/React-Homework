import React from 'react';

const BtnText=(props)=>{
    return(
        <button className={props.attributs.className} type={props.attributs.type}>{props.attributs.text}</button>
    )
};

export default BtnText;