import React from "react";
import { Link } from 'react-router-dom';
import Header2 from "../components/headers/header2";
import PtStats from "../components/PtStats/PtStats";
import './Home.css';


function Home () {
  return (
    <div className="Home">
      <div>
      <Header2/>
      </div>
      <div>
      <PtStats/>
      </div>
        <div className="home">
          <div className="buttonslink">
            <div>
              <nav>

              <Link to="/personal">
                <button type="button" className="buttonPP">Go to my personal area</button>
              </Link>

              <Link to="/countries">
                <button type="button" className="buttonWW">See WorldWide Situation</button>
              </Link>

              <Link to="/news">
                <button type="button" className="buttonPP">See news about covid</button>
              </Link>

              </nav>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
