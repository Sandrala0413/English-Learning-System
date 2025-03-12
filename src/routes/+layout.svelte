<script>
	import '../app.css';
	import {onMount} from 'svelte';
	import Header from '$lib/header/Header.svelte';
	// let { children } = $props();
	let load = false;

	onMount(()=>{
		load = true;
	});

</script>


<style>
  :global(body) {
    background: linear-gradient(135deg, #c5d5fa, #c3dc99, #fad0c4);
    height: 100vh;
    margin: 0;
  }
</style>

{#if load}
	<Header />
{/if}
<slot />

<!-- {@render children()} -->
