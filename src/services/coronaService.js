import axios from "axios";

const service = axios.create({
  baseURL: 'https://corona.lmao.ninja'
});

export const getAllCountries = async () => {
    try {
      const countriesList = await service.get('/v2/countries?yesterday&sort');
  
      return countriesList.data;
    } catch (error) {
      return error;
    }
  };

export const getPtStats = async () => {
  try{
    const ptStats = await service.get('/v2/countries/portugal');

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