import React from 'react';
import './NewsBlock.css'
import Button from '../Button';

class NewsBlock extends React.Component {
    state = {
        buttons: {
            heart: {
                'className': 'fa fa-heart-o bg-transparent border-0',
                'type': 'button'
            },
            heartFill: {
                'className': 'fa fa-heart bg-transparent border-0',
                'type': 'button'
            },
            trash: {
                'className': 'fa fa-trash-o bg-transparent border-0',
                'type': 'button'
            }
        }
    };

    render() {
        return (
            <div className="card" style={{backgroundColor: this.props.news.color}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.news.title}</h5>
                    <p className="card-text">{this.props.news.description}</p>
                    <footer className='btn-group'>
                        <Button attributs={this.props.news.status ? this.state.buttons.heartFill :this.state.buttons.heart}
                        myClick={(e)=>{
                            this.props.favoriteNotFavorite(this.props.news)
                        }}
                        />
                        <Button attributs={this.state.buttons.trash}
                                myClick={(e) => {
                                    this.props.deleteArticle(this.props.news)
                                }}
                        />
                    </footer>
                </div>
            </div>
        )
    }
};

export default NewsBlock;