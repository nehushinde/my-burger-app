import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8f2c2.firebaseio.com/'
});

export default instance;