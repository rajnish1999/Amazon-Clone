import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nodejs-server-amazon-clone.herokuapp.com'
})

export default instance;