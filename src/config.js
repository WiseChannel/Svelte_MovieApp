const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd4e9e87f14a720e32c310104fc6d3f6b';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
const MOVIE_ENDPOINT = id => `${API_URL}movie/${id}?api_key=${API_KEY}`;
const CREDITS_ENDPOINT = id => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  MOVIE_ENDPOINT,
  CREDITS_ENDPOINT,
};
