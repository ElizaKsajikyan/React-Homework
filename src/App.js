import React from 'react';
import NewsBlock from './NewsBlock/NewsBlock';
import CreateNewArticle from './CreateNewArticle/createNewArticle';
import FiltersBlock from './FiltersBlock/filtersBlock';
import ArticlesSection from './ArticlesSection/articlesSection';


function App() {

    return (
        <section className='container py-5'>
            <FiltersBlock/>
            <ArticlesSection/>
                <CreateNewArticle/>
        </section>
    );
}

export default App;
