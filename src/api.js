import {
    POPULAR_BASE_URL,
    SEARCH_BASE_URL,
    API_URL,
    MOVIE_ENDPOINT,
    CREDITS_ENDPOINT } from './config.js'

export  const fetchMovies = async (movies, loadMore, searchTerm) => {
    const endpoint = searchTerm
    ? `${SEARCH_BASE_URL}${searchTerm}&page=${
        loadMore ? movies.currentPage + 1 : 1 
    }`
    : `${POPULAR_BASE_URL}&page=${loadMore ? movies.currentPage + 1 : 1} `

    const result = await (await fetch(endpoint)).json();

    return {
        ...movies,
        movies: loadMore ? [...movies.movies, ...result.results] : [...result.results],
        heroImage: movies.heroImage || result.results[0],
        currentPage: result.page,
        totalPage: result.total_pages
    }
}
