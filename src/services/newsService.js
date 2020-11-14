import axios from 'axios';
// REACT_APP_API_KEY : process.env.REACT_APP_API_KEY  


const service = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});



export const getCovidNews = async () => {
    try {
        const coronaNews = await service.get(`/news`);
        return coronaNews.data;
    } catch (error) {
        return error;
    }
}