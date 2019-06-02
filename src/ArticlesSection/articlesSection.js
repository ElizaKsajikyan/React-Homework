import React from 'react';
import NewsBlock from './../NewsBlock/NewsBlock';
import SectionsTitle from './../SectionsTitle/sectionsTitle'


class ArticlesSection extends React.Component {
    constructor(props) {
        super(props);
    }

    newsBlock = this.props.news.map((n) => {
        return (
            <article className='col-12 col-sm-6 col-md-4 col-lg-3' key={n.id}>
                <NewsBlock news={n}/>
            </article>
        )
    });

    render() {
        return (
            <section className='w-100'>
                <SectionsTitle text='Articles'/>
                <section className='d-flex flex-wrap'>
                    {this.newsBlock}
                </section>
            </section>
        )
    }
}
;

export default ArticlesSection;