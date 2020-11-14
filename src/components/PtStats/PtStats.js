import React, { Component } from 'react';
import {getPtStats} from '../../services/coronaService';
import Translate from 'react-translate-component';
import './PtStats.css'

class PtStats extends Component {
    state = {
        pt: {},
    };

    fetchPt = () => {
        getPtStats()
            .then((pt) => {
                console.log("I have the data")
                this.setState({ pt })
            })
            .catch((error) => console.log(error));
    };

    componentDidMount = () => {
        this.fetchPt();
    }


    render = () => {
        console.log("Working fine")
        console.log(this.state.pt); 
        const {todayCases, todayDeaths, cases, deaths, updated } = this.state.pt

        return (
            <div>
                <ul>
                            <div key={""}>
                                <div className="homecontent">
                                    <div className="homeupdate">
                                       <p> <Translate content="p5"/><i>{updated}</i></p>
                                    </div>
                                    <div className="homedata">
                                        <div className="infectedsdata24h">
                                            <Translate content="p1" component="p"/>
                                            <p><strong className="numbers">{todayCases}</strong></p>
                                        </div>
                                        <div className="deathsdata24h">
                                            <Translate content="p2" component="p"/>
                                            <p><strong className="numbers">{todayDeaths}</strong></p>
                                        </div>
                                    </div>
                                    <div className="homedata">
                                        <div className="infectedsdatatotal">
                                            <Translate content="p3" component="p"/>
                                            <p><strong className="numbers">{cases}</strong></p>
                                        </div>
                                        <div className="deathsdatatotal">
                                            <Translate content="p4" component="p"/>
                                            <p><strong className="numbers">{deaths}</strong></p>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                </ul>
                
            </div>
        )
    }
}


export default PtStats