import React from 'react';
import NewsBlock from './../NewsBlock/NewsBlock';
import SectionsTitle from './../SectionsTitle/sectionsTitle'



const ArticlesSection = (props) => {
    const newsBlock = props.news.map((n) => {
   return(
        <article className='col-12 col-sm-6 col-md-4 col-lg-3'  key={n.id}>
        <NewsBlock news={n}/>
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
};

export default ArticlesSection;