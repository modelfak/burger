import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-project-241960304310.firebaseio.com'
});

export default instance;