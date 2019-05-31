import React from 'react';
import StatusBtn from './StatusBtn/statusBtn'
import BtnText from '../BtnText/btnText';

const NewsBlock = (props) => {
    return (
            <div className="card" style={{backgroundColor: props.news.color}}>
                <div className="card-body">
                    <h5 className="card-title">{props.news.title}</h5>
                    <p className="card-text">{props.news.description}</p>
                    <footer className='btn-group'>
                        <StatusBtn status={props.news.status}/>
                        <BtnText attributs={{'className': 'fa fa-trash-o bg-transparent border-0', 'type': 'button'}}/>
                    </footer>
                </div>
            </div>
    )
};

export default NewsBlock;