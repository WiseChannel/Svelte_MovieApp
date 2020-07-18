<script>
    import { onMount } from 'svelte';
    import { fetchMovies } from '../api';

    //import config
    import {
        IMAGE_BASE_URL,
        BACKDROP_SIZE,
        POSTER_SIZE,
    } from '../config';

    //import components
    import Hero from '../components/Hero.svelte';
    import Search from '../components/Search.svelte';
    import Grid from '../components/Grid.svelte';
    import Thumb from '../components/Thumb.svelte';
    import Spiner from '../components/Spinner.svelte';
    import LoadMoreButton from '../components/LoadMoreButton.svelte';

    let movies = { movies: [] };
    let isLoading;
    let searchTerm = '';
    let error;

    const handleFetchMovies = async (loadMore, searchTerm) => {
    try {
        isLoading = true;
        error = false;
        movies = await fetchMovies(movies, loadMore, searchTerm);
        console.log(movies);
    } catch (e) {
        error = true;
        console.error('Error from Home: ', e);
    }
    isLoading = false;
    };

    const handleSearch = e => {
    searchTerm = e.detail.searchText;
    movies.movies = [];
    handleFetchMovies(false, searchTerm);
    console.log(e);
    };

    const handleLoadMore = () => handleFetchMovies(true, searchTerm);

    onMount(async () => {handleFetchMovies(false, searchTerm)
    })
</script>

{#if error}
    <p>Something went to wrong..</p>
    {:else}
    {#if movies.heroImage && !searchTerm}
        <Hero
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.heroImage.backdrop_path}`}
            title={movies.heroImage.original_title}
            text={movies.heroImage.overview}
        />
    {/if}
{/if}

<Search on:search={handleSearch} />

<Grid header={searchTerm ? 'Search Result' : 'Popular Movies'} >
    {#each movies.movies as movie}
        <Thumb
            clickable
            image={movie.poster_path && IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
            movieId={movie.id}
            />
    {/each}
</Grid>

{#if isLoading}
    <Spiner />
{/if}

{#if !isLoading && movies.currentPage < movies.totalPage}
    <LoadMoreButton on:loadMore={handleLoadMore}>Load More</LoadMoreButton>
{/if}

<style>

</style>
