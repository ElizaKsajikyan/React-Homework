import React from 'react';
import InputFild from './../InputFild/inputFild';
import BtnText from './../BtnText/btnText';
import SectionsTitle from './../SectionsTitle/sectionsTitle';

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
    newsArray = this.props.news;
    favoriteNews = [];

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section>
                <SectionsTitle text='Search News'/>
                <form action="" className='w-100 d-flex flex-wrap mb-5'>
                    <div className={'form-group col-12 col-md-7'}>
                        <InputFild
                            attributs={this.state.search}/>
                    </div>
                    <div className={'form-group col-12 col-md-5'}>
                        <BtnText
                            myClick={(e) => {
                                this.props.action(e)
                                //  this.handleClick(e)
                            }}
                            attributs={this.state.favorites}/>
                        <BtnText
                            attributs={this.state.new}/>
                        <BtnText
                            attributs={this.state.all}/>
                    </div>
                </form>
            </section>
        )
    }
}

export default FiltersBlock;