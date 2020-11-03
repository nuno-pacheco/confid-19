import axios from "axios";

const service = axios.create({
  baseURL: 'https://api.coronatracker.com'
});

export const getAllCountries = async () => {
    try {
      const countriesList = await service.get('/v3/stats/worldometer/country?countryCode=');
  
      return countriesList.data;
    } catch (error) {
      return error;
    }
  };

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
    const coronaNews = await service.get('/news/trending?limit=10&offset&country=Portugal&countryCode%27');
    return coronaNews.data;
  } catch (error) {
    return error;
  }
}