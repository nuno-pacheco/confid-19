import React, { Component } from "react";
import { getCovidNews } from "../../services/newsService";
import './CoronNews.css';
import Translate from 'react-translate-component';
import { FacebookButton }  from "react-social";
import { IconContext } from "react-icons";
import {RiFacebookBoxFill} from "react-icons/ri";



class CoronaNews extends Component {
  state = {
    news:{},
  };

  fetchNews = () => {
    getCovidNews()
      .then((news) => {
        this.setState({ news });
      })
      .catch((error) => console.log(error));
  };

 
  /*getCovidNews= () =>{
    axios.get(`https://newsapi.org/v2/everything?q=Covid&sortBy=date&apiKey=cf30f0720b324d74b071853c1c464733`)
    .then(response=> {
      this.setState({
        news: response.data
      })
    })
    .catch ((err) =>console.log(err));
  }
  */

  componentDidMount = () => {
    this.fetchNews();
  };

  render() {
    console.log(this.state)

    
    return (
        <div>
            <div className="container newscontainer">
            <IconContext.Provider value={{color: "white", size: "2em"}}>
            <h1 className="newsTitle1"><Translate content="h11"/></h1>
                <div className="row">
                    <div className='col-12' style={{ maxHeight: '65vh', maxWidth: '100vw', overflow: 'scroll' }}>
                        <ul>
                        {this.state.news.articles && this.state.news.articles.map(
                            ({ id, title, description, publishedAt, url, urlToImage }) => (
                            <li className="card m-3 d-flex"
                                style={{maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                key={url}>
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
                                <div className="sub">
                                <sub>{publishedAt}</sub>    
                                </div>                            
                                <FacebookButton url={url} appId={949368812258074} className="faceButton">
                                     <RiFacebookBoxFill/> <Translate content="span13"/>
                                </FacebookButton>
                            </div>
                            </li>
                            )
                        )}
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>    
            </div>
        </div>
    );
  }
}

export default CoronaNews;
