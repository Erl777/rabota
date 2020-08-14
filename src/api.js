import axios from 'axios';

let params = {
  baseURL: 'http://work'
};

const api = axios.create(params);

export default api;