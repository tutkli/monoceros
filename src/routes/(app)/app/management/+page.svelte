<script lang="ts">
	import { headerStore } from '$lib/stores/app-header.store'
	import { onMount } from 'svelte'
	import type { PageData } from './$types'

	export let data: PageData

	onMount(() => {
		headerStore.setTitle('Management')
	})
</script>

<p>Management page</p>
<p>{data.message}</p>
