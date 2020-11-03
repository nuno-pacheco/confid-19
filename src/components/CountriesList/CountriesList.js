import React, { Component } from 'react';
import { getAllCountries} from '../../services/coronaService';
import Header2 from '../../components/headers/header2';
import './CoutriesList.css';
import {Input} from 'mdbreact'


class CountriesList extends Component {
    state = {
        countries: [],
        search: ''
    };

    fetchCountries = () => {
        getAllCountries()
            .then((countries) => {
                this.setState({ countries });
            })
            .catch((error) => console.log(error));
    };

    componentDidMount = () => {
        this.fetchCountries()
    };

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }


    render = () => {
        console.log(this.state.countries);
        let filteredCountries = this.state.countries.filter(
            (country) => {
                return country.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
       
        

        return (
            <div>
                <Header2/>
                
    
                    <div className="container">
                    <h1>Search a Country!</h1>
                    <Input type="text"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}/>  
                        <div className="row">
                                <div className='col-12' style={{ maxHeight: '55vh', maxWidth: '100vw', overflow: 'scroll' }}>
                                    <ul>
                                    {filteredCountries.map(
                                        ({country, dailyConfirmed, dailyDeaths, lastUpdated}) => (
                                            <li className="card m-3 d-flex"
                                            style={{maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                            key={country}
                                            >
                                            
                                            <div className= "list-group">
                                                <div>
                                                        <h4> {country} </h4>
                                                    <div>
                                                        <p>Last 24h hours cases: <strong>{dailyConfirmed}</strong></p> 
                                                    </div>
                                                    <div>
                                                        <p>Last 24h hours deaths: <strong>{dailyDeaths}</strong></p> 
                                                    </div>
                                                    <div>
                                                        <sub>Last update: {lastUpdated} </sub>
                                                    </div>
                                                    
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
               
        )
    }
}

export default CountriesList