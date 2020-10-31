import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllCountries} from '../../services/coronaService';
import SearchCountry from '../SearchCountry/SearchCountry';
import Header2 from '../../components/headers/header2';
import axios from 'axios';

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

    handleSearchCountry (newValue) {
        this.setState({
        search: newValue,
        });
        axios.get(`http://api.coronatracker.com/v3/analytics/newcases/country?q=${newValue}`)
          .then((resp) => {
              this.setState({
                  countries: resp.data
              })
      })
    };  

    render = () => {
        console.log(this.state.countries);

        return (
            <div>
                <Header2/>
                <SearchCountry searchCountry={this.searchCountry} handleSearchCountry={this.handleSearchCountry.bind(this)}/>
                <div className='container'>
                    <div className='row cards-allcountries-container'>
                        {this.state.countries.map(
                            ({country_code, country, dailyConfirmed, dailyDeaths, lastUpdated}) => (
                                <li className="card m-3 d-flex"
                                style={{maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
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