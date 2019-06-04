import React from 'react';
import './FiltersBlock.css'
import InputFild from './../InputFild';
import Button from './../Button';
import SectionsTitle from './../SectionsTitle';

class FiltersBlock extends React.Component {
    state = {
        favorites: {
            'className': 'btn btn-outline-info w-25',
            'type': 'button',
            'text': 'Favorites'
        },
        new: {
            'className': 'btn btn-outline-info w-25 mx-3',
            'type': 'button',
            'text': 'New'
        },
        all: {
            'className': 'btn btn-outline-info w-25',
            'type': 'button',
            'text': 'All'
        },
        search: {
            'type': 'text',
            'className': 'form-control',
            'placeholder': 'Search...'
        }
    };

    render() {
        return (
            <section>
                <SectionsTitle text='Search News'/>
                <form action="" className='w-100 d-flex flex-wrap mb-5'>
                    <div className={'form-group col-12 col-md-7'}>
                        <InputFild
                            attributs={this.state.search}
                            myClick={(e) => {
                                this.props.filterSearch(e.target.value);
                            }}/>
                    </div>
                    <div className={'form-group col-12 col-md-5'}>
                        <Button
                            myClick={(e) => {
                                this.props.filterBtn(true)
                            }}
                            attributs={this.state.favorites}/>
                        <Button
                            myClick={(e) => {
                                this.props.filterBtn(false)
                            }}
                            attributs={this.state.new}/>
                        <Button
                            myClick={(e) => {
                                this.props.filterBtn()
                            }}
                            attributs={this.state.all}/>
                    </div>
                </form>
            </section>
        )
    }
}

export default FiltersBlock;