import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

instance.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem('token');

    // Authorization Token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // API Security Headers
    config.headers['X-api-key'] = process.env.REACT_APP_API_KEY;
    config.headers['X-salt-key'] = process.env.REACT_APP_SALT_KEY;

    return config;

  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;