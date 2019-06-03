import React from 'react';
import CreateNewArticle from './CreateNewArticle/createNewArticle';
import FiltersBlock from './FiltersBlock/filtersBlock';
import ArticlesSection from './ArticlesSection/articlesSection';


class App extends React.Component {
    state = {
        articles: [
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
        ]
    };

    filterFavoriteArticles() {
        this.setState(({articles}) => {

            const data = articles;
            this.data = data.filter(item => item.status === true);

            return {
                articles: this.data
            }
        })

    }

    render() {
        console.log(this.state.articles);
        return (
            <section className='container py-5'>
                <FiltersBlock action={() => this.filterFavoriteArticles()}/>
                <ArticlesSection news={this.state.articles}/>
                <CreateNewArticle/>
            </section>
        );
    }
}

export default App;
