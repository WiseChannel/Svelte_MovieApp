<script>

//import components
import Header from '../components/Header.svelte'
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


</script>

<Header />
<Hero />
<Search />
<Grid />
<Thumb />
<LoadMoreButtun />
<Spiner />

<style>

</style>
