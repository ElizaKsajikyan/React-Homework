import React from 'react';
import NewsBlock from './../NewsBlock/NewsBlock';
import SectionsTitle from './../SectionsTitle/sectionsTitle'

const news = [
    {
        'id': 1,
        'title': 'Card title 1',
        'description': 'Some quick example text to build on the card title and make up the bulk of the  card\'s content.',
        'color': '#fdffe2',
        'status': true
    },
    {
        'id': 2,
        'title': 'Card title 2',
        'description': 'Some quick example text to build on the card title and make up the bulk of the  card\'s content.',
        'color': '#fff2ea',
        'status': false
    },
    {
        'id': 3,
        'title': 'Card title 3',
        'description': 'Some quick example text to build on the card title and make up the bulk of the  card\'s content.',
        'color': '#e0fff6',
        'status': false
    },
    {
        'id': 4,
        'title': 'Card title 4',
        'description': 'Some quick example text to build on the card title and make up the bulk of the  card\'s content.',
        'color': '#e0fff6',
        'status': false
    }
];

const newsBlock = news.map((n) => {
    return (
        <NewsBlock news={n} key={n.id}/>
    )
});

const ArticlesSection = () => {
    return (
        <section className='w-100'>
            <SectionsTitle text='Articles'/>
            <section className='d-flex flex-wrap'>
                {newsBlock}
            </section>
        </section>
    )
};

export default ArticlesSection;