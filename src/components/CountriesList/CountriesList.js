import React, { Component } from 'react';
import { getAllCountries} from '../../services/coronaService';
import './CoutriesList.css';
import {Input} from 'mdbreact';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../../components/translations/en';
import pt from '../../components/translations/pt';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('pt', pt);
counterpart.setLocale('en');


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
        console.log("ALL STAR", this.state.countries);
        let filteredCountries = this.state.countries.filter(
            (country) => {
                return country.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
       
        

        return (
            <div>
                <div className="container countriescontainer">
                    <h1 className="countriesTitle"><Translate content="h1"/></h1>
                    <Input type="text"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)} className="searchCountry"/>  
                        <div className="row">
                                <div className='col-12' style={{ maxHeight: '55vh', maxWidth: '100vw', overflow: 'scroll' }}>
                                    <ul>
                                    {filteredCountries.map(
                                        ({country, todayCases, todayDeaths, countryInfo, cases, deaths, updated}) =>  console.log(countryInfo) || (

                                            <li className="card m-3 d-flex"
                                            style={{width: 340, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                            key={country}
                                            >
                                            <div className= "list-group">
                                                <div>
                                                    <div className="countryFlags">
                                                        <h4> {country} </h4>
                                                      <img src={countryInfo.flag} alt="Country Flag"></img> 
                                                    
                                                    </div>
                                                    <div className="dailyContent">                                                
                                                        <div>
                                                            <p className="infecteds"><Translate content="p1"/> <br/> <strong className="numb">{todayCases}</strong></p> 
                                                        </div>
                                                        <div>
                                                            <p className="deaths"><Translate content="p2"/> <br/> <strong className="numb">{todayDeaths}</strong></p> 
                                                        </div>
                                                    </div>
                                                    <div className="totalContent">
                                                        <div>
                                                            <p className="infecteds"><Translate content="p3"/> <br/> <strong className="numb">{cases}</strong></p> 
                                                        </div>
                                                        <div>
                                                            <p className="deaths"><Translate content="p4"/> <br/> <strong className="numb">{deaths}</strong></p> 
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <sub><Translate content="span11"/> {updated} </sub>
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