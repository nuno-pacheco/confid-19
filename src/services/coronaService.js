import axios from "axios";

const service = axios.create({
  baseURL: 'http://api.coronatracker.com'
});

export const getAllCountries = async () => {
    try {
      const countriesList = await service.get('/v3/stats/worldometer/country?countryCode=');
  
      return countriesList.data;
    } catch (error) {
      return error;
    }
  };

export const getSingleCountry = async (country_code) => {
    try {
        const response = await service.get ('/v3/countries/' + country_code );
        const country = response.data;
        return country;
    } catch (error) {
        return error;
    }
}


export const getPtStats = async () => {
  try{
    const ptStats = await service.get('/v3/stats/worldometer/country?countryCode=PT');

    return ptStats.data;
  } catch (error) {
    return error;
  }
}

export const getCoronaNews = async () => {
  try{
    const coronaNews = await service.get('/news/trending');
    return coronaNews.data;
  } catch (error) {
    return error;
  }
}