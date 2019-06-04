import React from 'react';
import './ArticleSection.css'
import NewsBlock from './../NewsBlock';
import SectionsTitle from './../SectionsTitle'


class ArticlesSection extends React.Component {

    render() {
       let newsBlock = this.props.news.map((n) => {
            return (
                <article className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={n.id}>
                    <NewsBlock deleteArticle={(e)=>{
                        this.props.deleteArticle(e)
                    }}
                               favoriteNotFavorite={(e)=>{
                                   this.props.favoriteNotFavorite(e)
                               }}
                               news={n}/>
                </article>
            )
        });
        return (
            <section className='w-100'>
                <SectionsTitle text='Articles'/>
                <section className='d-flex flex-wrap'>
                    {newsBlock}
                </section>
            </section>
        )
    }
}

export default ArticlesSection;