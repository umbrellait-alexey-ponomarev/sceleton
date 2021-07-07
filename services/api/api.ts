import axios from 'axios';
import { addToast } from '../../src/redux/toast/actions';

export const API_KEY = '8RzTKoK7GwmfEyXWmSAgv5DZGKdGYJuM&offset';

export const API = axios.create({
  baseURL: 'https://api.nytimes.com/',
});

API.interceptors.response.use(
  response => response,
  error => {
    if (error) {
      addToast({
        key: Math.random() * Math.random(),
        message: error.response.statusText,
        autoClose: true,
      });
    }
  },
);

export const getMovies = (page: number = 0) => {
  let response;
  API.get(`svc/movies/v2/reviews/all.json?offset=${page}`).then(res => {
    response = res;
  });
  return response;
};
