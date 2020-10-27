import React from "react";
import { Link } from 'react-router-dom';
import Header1 from "../components/headers/header1";
import PtStats from "../components/PtStats/PtStats";
import './Home.css'

function Home (props) {
  const { username } = props.user;

  

  const getLinks = () => {
      //All countries link
      const allCountries = (
        <div className="home">
          <div className="buttonslink">
            <div>
              <Link to="/countries">
                <button type="button" className="btn btn-info">See WorldWide Situation</button>
              </Link>
            </div>
            <div>
              <Link to="/personal">
                <button type="button" className="btn btn-info">Go to my personal area</button>
              </Link>
            </div>
          </div>
        </div>
      );
    return(
      <ul >
        <div>{allCountries}</div> 
      </ul>
    )
  }

  return (
    <div className="Home">
      <Header1/>
      
      <PtStats/>
  
     
      <div> {getLinks()}</div>
    </div>
  );
};

export default Home;
