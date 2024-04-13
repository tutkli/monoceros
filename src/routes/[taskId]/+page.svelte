<script lang="ts">
	import type { PageData } from './$types'
	import TaskLi from '$lib/components/TaskLi.svelte'

	export let data: PageData
	const list = data.list
</script>

<h2 class="text-xl font-semibold">{list.name}</h2>

<ul class="space-y-2">
	{#each list.tasks as task (task.id)}
		<TaskLi {task} />
	{/each}
</ul>
