import axios from 'axios';

// making requests to movie databse : base url
const instance = axios.create({
    baseURL: 'http://api.themoviedb.org/3',
});

export default instance;