import axios from 'axios';

const REST_BASE_URL = `${process.env.REACT_APP_API_PROGRAM_SERVICE}/odata`;
const httpClient = axios.create({
  baseURL: REST_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

httpClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error.response.data.value);
});

export default httpClient;
