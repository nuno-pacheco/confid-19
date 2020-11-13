import axios from 'axios';

const service = axios.create({
    baseURL: 'https://newsapi.org/v2'
});

export const getCovidNews = async () => {
    try {
        const coronaNews = await service.get('/everything?q=Covid&sortBy=date&apiKey=cf30f0720b324d74b071853c1c464733');
        return coronaNews.data;
    } catch (error) {
        return error;
    }
}