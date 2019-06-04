import React from 'react';
import './CreateNewArticle.css';
import InputFild from '../InputFild';
import Button from '../Button';
import SectionsTitle from '../SectionsTitle'

class CreateNewArticle extends React.Component {
    color = React.createRef();
    title = React.createRef();
    description = React.createRef();

    render() {
        return (
            <section className='w-100 my-5'>
                <SectionsTitle text='Create Article'/>
                <form action="" className='col-sm-6 mx-auto'>
                    <div className='form-group'>
                        <InputFild
                            refValue={this.title}
                            attributs={{'type': 'text', 'className': 'form-control', 'placeholder': 'Type title...'}}/>
                    </div>
                    <div className='form-group'>
                    <textarea
                        ref={this.description}
                        className='form-control' cols="30" rows="10"
                        placeholder='Type description...'></textarea>
                    </div>


                    <div className='form-group'>
                        <label htmlFor="">
                            <InputFild attributs={{'type': 'color', 'className': 'mr-3', 'placeholder': ''}}
                                       refValue={this.color}/>
                            Choose color...
                        </label>
                    </div>
                    <div className='form-group'>
                        <Button
                            myClick={() => {
                                this.props.createArticle(this.color.current.value, this.description.current.value,
                                    this.title.current.value);
                                this.title.current.value = '';
                                this.description.current.value = '';
                                this.color.current.value = '#000'
                            }}
                            attributs={{'className': 'btn btn-info', 'type': 'button', 'text': 'Add article'}}
                        />
                    </div>
                </form>
            </section>
        )
    }
};

export default CreateNewArticle;