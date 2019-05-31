import React from 'react';
import InputFild from './../InputFild/inputFild';
import BtnText from './../BtnText/btnText';
import SectionsTitle from './../SectionsTitle/sectionsTitle';

const FiltersBlock = () => {
    return (
        <section>
            <SectionsTitle text='Search News'/>
            <form action="" className='w-100 d-flex flex-wrap mb-5'>
                <div className={'form-group col-12 col-md-7'}>
                    <InputFild attributs={{'type': 'text', 'className': 'form-control', 'placeholder': 'Search...'}}/>
                </div>
                <div className={'form-group col-12 col-md-5'}>
                    <BtnText
                        attributs={{'className': 'btn btn-outline-info w-25', 'type': 'button', 'text': 'Favorites'}}/>
                    <BtnText
                        attributs={{'className': 'btn btn-outline-info w-25 mx-3', 'type': 'button', 'text': 'New'}}/>
                    <BtnText attributs={{'className': 'btn btn-outline-info w-25', 'type': 'button', 'text': 'All'}}/>
                </div>
            </form>
        </section>
    )
};

export default FiltersBlock;