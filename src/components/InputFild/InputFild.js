import React from 'react';
import './InputFild.css'

const InputFild=(props)=>{
    return(

            <input
                ref={props.refValue}
                type={props.attributs.type} className={props.attributs.className}
                   placeholder={props.attributs.placeholder}
                   onChange={props.myClick}
            />
    )
};

export default InputFild;