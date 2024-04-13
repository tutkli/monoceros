<script lang="ts">
	import { headerStore } from '$lib/stores/app-header.store'
	import { onMount } from 'svelte'

	onMount(() => {
		headerStore.setTitle('Monoceros')
	})
</script>

<p>Home page</p>
