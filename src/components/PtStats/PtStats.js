import React, { Component } from 'react';
import {getPtStats} from '../../services/coronaService';
import './PtStats.css'

class PtStats extends Component {
    state = {
        pt: [],
    };

    fetchPt = () => {
        getPtStats()
            .then((pt) => {
                this.setState({ pt })
            })
            .catch((error) => console.log(error));
    };

    componentDidMount = () => {
        this.fetchPt();
    }


    render = () => {
        console.log(this.state.pt);

        return (
            <div>
                <ul>
                    {this.state.pt.map(
                        ({dailyConfirmed, dailyDeaths, totalConfirmed, totalDeaths, lastUpdated }) => (
                            
                                <div className="homecontent">
                                    <div className="homeupdate">
                                        <p><strong>Last update:</strong><i>{lastUpdated}</i></p>
                                    </div>
                                    <div className="homedata">
                                        <div className="infectedsdata24h">
                                            <p>Number of infecteds last 24H:</p>
                                            <p><strong>{dailyConfirmed}</strong></p>
                                        </div>
                                        <div className="deathsdata24h">
                                            <p>Number of deaths last 24H:</p>
                                            <p><strong>{dailyDeaths}</strong></p>
                                        </div>
                                    </div>
                                    <div className="homedata">
                                        <div className="infectedsdatatotal">
                                            <p>Total number of infecteds:</p>
                                            <p><strong>{totalConfirmed}</strong></p>
                                        </div>
                                        <div className="deathsdatatotal">
                                            <p>Total number of deaths:</p>
                                            <p><strong>{totalDeaths}</strong></p>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                        )
                            
                    )}
                </ul>
                
            </div>
        )
    }
}

export default PtStats