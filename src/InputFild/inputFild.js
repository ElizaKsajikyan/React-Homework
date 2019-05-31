import React from 'react';

const InputFild=(props)=>{
    return(

            <input type={props.attributs.type} className={props.attributs.className}
                   placeholder={props.attributs.placeholder}/>
    )
};

export default InputFild;