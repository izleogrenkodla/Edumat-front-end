import axios from 'axios';
import store from '@/store/index';

const request = axios.create({
  baseURL: 'https://localhost:5001/api/',
});

request.interceptors.request.use(
  (config) => {
    store.state.auth.token ? config.headers.Authorization = `Bearer ${store.state.auth.token}` : false;
    return config;
  },
  err => console.log(err),
);

export default request;
