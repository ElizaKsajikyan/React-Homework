import React from 'react';
import './App.css'
import CreateNewArticle from './../CreateNewArticle';
import FiltersBlock from './../FiltersBlock';
import ArticlesSection from './../ArticlesSection';


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
    oldState = this.state.articles;

    searchFilter(st) {
        this.setState(({articles}) => {
            articles = this.oldState;
            let search = articles;
            search = search.filter(item => item.title.match(st));
            return {
                articles: search,
            }
        })
    }

    filterArticles(st) {
        this.setState(({articles}) => {
            articles = this.oldState;
            switch (st) {
                case true:
                    let favoriteData = articles;
                    favoriteData = favoriteData.filter(item => item.status === st);

                    return {
                        articles: favoriteData,
                    };
                    break;
                case  false:
                    let data = articles;
                    data = data.filter(item => item.status === st);

                    return {
                        articles: data
                    };
                    break;
                default:
                    let allData = articles;
                    return {
                        articles: allData
                    };

            }
        })
    }

    deleteThisArticle(e) {
        this.setState(({articles}) => {
            let removeArticle = articles;

            removeArticle.map((item, i) => {
                if (item === e) {
                    removeArticle.splice(i, 1)
                }
            });
            return {
                articles: removeArticle
            }

        })
    }

    favoriteNotFavorite(e) {
        this.setState(({articles}) => {
            let favoriteNotFavorite = articles;

            favoriteNotFavorite.map((item, i) => {
                if (item === e) {
                    item.status = !item.status
                }
            });
            return {
                articles:favoriteNotFavorite
            }
        })
    }

    createNewArticle(color, desc, title) {
        let newArticle =
            {
                'id': this.state.articles.length + 1,
                'title': title,
                'description': desc,
                'color': color,
                'status': false
            };
        this.setState(({articles}) => {
            articles.push(newArticle);
            return (
                articles
            )
        });
    }


    render() {
        return (
            <section className='container py-5'>
                <FiltersBlock filterBtn={(st) => this.filterArticles(st)}
                              filterSearch={(st) => {
                                  this.searchFilter(st)
                              }}/>
                <ArticlesSection news={this.state.articles} deleteArticle={(e) => {
                    this.deleteThisArticle(e)
                }}
                                 favoriteNotFavorite={(e) => {
                                     this.favoriteNotFavorite(e)
                                 }}/>
                <CreateNewArticle createArticle={(color, desc, title) => {
                    this.createNewArticle(color, desc, title)
                }}/>
            </section>
        );
    }
}

export default App;
