import React from 'react';
import BtnText from "../../BtnText/btnText";

const StatusBtn = (props) => {
    if(props.status){
        return (
            <BtnText attributs={{'className': 'fa fa-heart bg-transparent border-0', 'type': 'button'}}/>
        )
    }return(
        <BtnText attributs={{'className': 'fa fa-heart-o bg-transparent border-0', 'type': 'button'}}/>
    )

};

export default StatusBtn;