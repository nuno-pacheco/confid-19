import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PtStats from "../components/PtStats/PtStats";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../components/translations/en';
import pt from '../components/translations/pt';
import './Home.css';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('pt', pt);
counterpart.setLocale('en');

class Home extends Component {

  


  render(){
    return (
      <div className="Home">
        <div>
       <PtStats/>
        </div>
          <div className="home">
            <div className="buttonslink">
              <div>
                <nav>

                <Link to="/personal">
                  <button type="button" className="buttonPP"><Translate content="span1"/></button>
                </Link>

                <Link to="/countries">
                  <button type="button" className="buttonWW"><Translate content="span2"/></button>
                </Link>

                <Link to="/news">
                  <button type="button" className="buttonPP"><Translate content="span3"/></button>
                </Link>

                </nav>
              </div>
            </div>
          </div>
      </div>
    );
  };
}
export default Home;
