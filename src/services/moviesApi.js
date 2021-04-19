import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7cce51022f23cd48967f6a8f552940cf';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
};

const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day`);
    return data.results;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

const fetchMoviesByName = async name => {
  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${name}`,
    );
    return data.results;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

const fetchMoviesById = async id => {
  try {
    const response = await axios.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

const fetchFilmCasts = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits`);
    return response.data.cast;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};
const fetchFilmReviews = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews`);
    return response.data.results;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

const fetch = {
  fetchTrendingMovies,
  fetchMoviesByName,
  fetchMoviesById,
  fetchFilmCasts,
  fetchFilmReviews,
};

export default fetch;
