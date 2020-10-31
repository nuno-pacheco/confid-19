import React, { Component } from 'react';
import {getCoronaNews} from '../../services/coronaService';

class CoronaNews extends Component {
    state = {
        news: [],
    };

    fetchNews = () => {
        getCoronaNews()
            .then((news) => {
                this.setState({ news })
            })
            .catch((error) => console.log(error));
    };

    componentDidMount = () => {
        this.fetchNews();
    }

    render() {
        console.log(this.state.news);

        return (
            <div>
                <ul>
                    {this.state.news.map(({author, title, description, publishedAt }) => {
                        return(
                            <div className="news Content">
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <p>{author}</p>
                                <sub>{publishedAt}</sub>
                            </div>
                        )}
                    )}
                </ul>
                
            </div>
        )
    }
}

export default CoronaNews