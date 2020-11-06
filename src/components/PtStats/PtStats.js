import React, { Component } from 'react';
import {getPtStats} from '../../services/coronaService';
import Translate from 'react-translate-component';
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
                            <div key={""}>
                                <div className="homecontent">
                                    <div className="homeupdate">
                                       <p> <Translate content="p5"/><i>{lastUpdated}</i></p>
                                    </div>
                                    <div className="homedata">
                                        <div className="infectedsdata24h">
                                            <Translate content="p1" component="p"/>
                                            <p><strong className="numbers">{dailyConfirmed}</strong></p>
                                        </div>
                                        <div className="deathsdata24h">
                                            <Translate content="p2" component="p"/>
                                            <p><strong className="numbers">{dailyDeaths}</strong></p>
                                        </div>
                                    </div>
                                    <div className="homedata">
                                        <div className="infectedsdatatotal">
                                            <Translate content="p3" component="p"/>
                                            <p><strong className="numbers">{totalConfirmed}</strong></p>
                                        </div>
                                        <div className="deathsdatatotal">
                                            <Translate content="p4" component="p"/>
                                            <p><strong className="numbers">{totalDeaths}</strong></p>
                                        </div>

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