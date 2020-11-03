import React from 'react';
import {Link} from "react-router-dom";
import Header1 from "../../components/headers/header1";
import './Personal.css';




function PersonalArea (props) {
    const{username}=props.user;

        return (
            <div className="container">
                <Header1/>
                <h1>Hello {username&&props.user.username} ?</h1>
                    <nav>
                        <div className="buttonBox">
                            <Link to="/all_feelings">
                                <button type="button" className="buttonRF">SEE YOUR FEELINGS</button>
                            </Link>
                            <Link to="/create">
                                <button type="button" className="buttonRF">REGIST NEW FEELING</button>
                            </Link>
                        </div>
                    </nav>
            </div>
        
            
        )
}


export default PersonalArea