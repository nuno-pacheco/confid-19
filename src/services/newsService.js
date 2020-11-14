import axios from 'axios';
// REACT_APP_API_KEY : process.env.REACT_APP_API_KEY  


const service = axios.create({
    baseURL: 'https://newsapi.org/v2',
});



export const getCovidNews = async () => {
    try {
        const coronaNews = await service.get(`/everything?q=Covid&apiKey=${process.env.REACT_APP_API_KEY}`);
        return coronaNews.data;
    } catch (error) {
        return error;
    }
}