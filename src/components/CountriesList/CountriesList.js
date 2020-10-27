import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllCountries} from '../../services/coronaService';
import SearchCountry from '../SearchCountry/SearchCountry'
import axios from "axios";

class CountriesList extends Component {
    state = {
        countries: [],
        searchCountry: ''
    };

    fetchCountries = () => {
        getAllCountries()
            .then((countries) => {
                this.setState({ countries });
            })
            .catch((error) => console.log(error));
    };

    componentDidMount = () => {
        this.fetchCountries();
    };

    searchCountry = (country) => {
        this.searchCountry(country)
          .then((srchResp) => {
            this.setState({ countries: srchResp });
          })
          .catch((error) => console.log(error));
      };


    render = () => {
        console.log(this.state.countries);

        return (
            <div>
                <SearchCountry searchCountry={this.searchCountry} />
                <div className='container'>
                    <div className='row'>
                        {this.state.countries.map(
                            ({country_code, country, dailyConfirmed, dailyDeaths, lastUpdated}) => (
                                <li className="list-group"
                                style={{ display: 'flex', flexDirection: 'column' }}
                                key={country_code}
                                >
                                <div className= " list-group-item each-country">
                                    <div>
                                        <Link to={`/countries/${country_code}`}>
                                            <h4> {country} </h4>
                                        </Link>
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
                    </div>    
                </div>
            </div>
        )
    }
}

export default CountriesList