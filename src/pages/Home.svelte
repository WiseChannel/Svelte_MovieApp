<script>
import { onMount } from 'svelte'
import { fetchMovies } from '../api'

//import config
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
} from '../config'

//import components
import Hero from '../components/Hero.svelte'
import Search from '../components/Search.svelte'
import Grid from '../components/Grid.svelte'
import Thumb from '../components/Thumb.svelte'
import LoadMoreButtun from '../components/LoadMoreButton.svelte'
import Spiner from '../components/Spinner.svelte'

let movies = { movies: [] }
let isLoading
let searchTerm = ''
let error

const handleFetchMovies = async (loadMore, searchTerm) => {
    try {
        isLoading = true;
        error = false;
        movies = await fetchMovies(movies, loadMore, searchTerm);
        console.log(movies);
    } catch(e) {
        error = true;
        console.error('Error from Home: ', e);
    }
    isLoading = false;
}

onMount(async () => {
    handleFetchMovies(false, searchTerm)
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


<Search />
<Grid />
<Thumb />
<LoadMoreButtun />
<Spiner />

<style>

</style>
