import axios from 'axios';
const apiKey = '7cce51022f23cd48967f6a8f552940cf';

const fetchTrendingMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
    .then(({ data }) => data.results);
};

const fetchMoviesByName = name => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${name}&page=1&include_adult=false`,
    )
    .then(({ data }) => data.results);
};
const fetchMoviesById = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
    )
    .then(response => response.data);
};
const fetchFilmCasts = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`,
    )
    .then(response => response.data.cast);
};
const fetchFilmReviews = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US`,
    )
    .then(response => response.data.results);
};

const fetch = {
  fetchTrendingMovies,
  fetchMoviesByName,
  fetchMoviesById,
  fetchFilmCasts,
  fetchFilmReviews,
};

export default fetch;
