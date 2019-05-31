import React from 'react';
import InputFild from './../InputFild/inputFild';
import BtnText from './../BtnText/btnText';
import SectionsTitle from './../SectionsTitle/sectionsTitle'

const CreateNewArticle = (props) => {
    return (
        <section className='w-100 my-5'>
            <SectionsTitle text='Create Article'/>
            <form action="" className='col-sm-6 mx-auto'>
                <div className='form-group'>
                    <InputFild
                        attributs={{'type': 'text', 'className': 'form-control', 'placeholder': 'Type title...'}}/>
                </div>
                <div className='form-group'>
                    <textarea className='form-control' cols="30" rows="10"
                              placeholder='Type description...'></textarea>
                </div>


                <div className='form-group'>
                    <label htmlFor="">
                        <InputFild attributs={{'type': 'color', 'className': 'mr-3', 'placeholder': ''}}/>
                        Choose color...
                    </label>
                </div>
                <div className='form-group'>
                    <BtnText attributs={{'className': 'btn btn-info', 'type': 'button', 'text': 'Add article'}}/>
                </div>
            </form>
        </section>
    )
};

export default CreateNewArticle;