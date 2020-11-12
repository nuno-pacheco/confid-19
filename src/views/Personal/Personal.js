import React from 'react';
import {Link} from "react-router-dom";
import Header1 from "../../components/headers/header1";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../../components/translations/en';
import pt from '../../components/translations/pt';
import './Personal.css';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('pt', pt);
counterpart.setLocale('en');


function PersonalArea (props) {
    const{username}=props.user;

        return (
            <div className="container">
                <Header1/>
                <div className="personalh1">
                    <h1 className="personalh1"><Translate content="span6"/> {username&&props.user.username} !</h1>
                </div>    
                    <nav>
                        <div className="buttonBox">
                            <Link to="/all_feelings">
                                <button type="button" className="buttonRF"><Translate content="span4"/></button>
                            </Link>
                            <Link to="/create">
                                <button type="button" className="buttonRF"><Translate content="span5"/></button>
                            </Link>
                            <Link to="/chatbot">
                                <button type="button" className="buttonPI"><Translate content="span10"/></button>
                            </Link>

                        </div>
                    </nav>
            </div>
        
            
        )
}


export default PersonalArea