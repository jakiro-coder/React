import axios from 'axios';

const REST_BASE_URL = `${process.env.REACT_APP_API_URL}/odata`;

const httpClient = axios.create({
  baseURL: REST_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

httpClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    return Promise.reject(error.response.data.value);
  }
  return Promise.reject(error.message);
});

export default httpClient;