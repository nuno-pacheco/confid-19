import React, { Component } from "react";
import { getCoronaNews } from "../../services/coronaService";
import Header2 from '../../components/headers/header2';
import './CoronNews.css';

class CoronaNews extends Component {
  state = {
    news:{},
  };

  fetchNews = () => {
    getCoronaNews()
      .then((news) => {
        this.setState({ news });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    this.fetchNews();
  };

  render() {
    console.log(this.state)
    
    return (
        <div>
            <Header2/>
            <div className="container">
            <h1>Last news about Covid!</h1>
                <div className="row">
                    <div className='col-12' style={{ maxHeight: '55vh', maxWidth: '100vw', overflow: 'scroll' }}>
                        <ul>
                        {this.state.news.items && this.state.news.items.map(
                            ({ nid, author, title, description, publishedAt, urlToImage }) => (
                            <li className="card m-3 d-flex"
                                style={{maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                key={nid}>
                            <div className= "list-group">
                                <div className="newsImage">
                                    <img src={urlToImage} alt={this.props.urlToImage}/> 
                                </div>
                                <div className="newsTitle">
                                    <h3>{title}</h3>
                                </div>
                                <div>
                                    <p>{description}</p>    
                                </div>
                                <div>
                                    <p>{author}</p>    
                                </div>
                                <div>
                                <sub>{publishedAt}</sub>    
                                </div>
                            </div>
                            </li>
                            )
                        )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default CoronaNews;
