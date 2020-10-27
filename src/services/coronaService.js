import axios from "axios";

const service = axios.create({
  baseURL: 'http://api.coronatracker.com/v3'
});

export const getAllCountries = async () => {
    try {
      const countriesList = await service.get('/stats/worldometer/country?countryCode=');
  
      return countriesList.data;
    } catch (error) {
      return error;
    }
  };

export const getSingleCountry = async (country_code) => {
    try {
        const response = await service.get ('/countries/' + country_code );
        const country = response.data;
        return country;
    } catch (error) {
        return error;
    }
}


export const getPtStats = async () => {
  try{
    const ptStats = await service.get('/stats/worldometer/country?countryCode=PT');

    return ptStats.data;
  } catch (error) {
    return error;
  }
;}

