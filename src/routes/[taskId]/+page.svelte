<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	const list = data.list
</script>

<p>{list.name}</p>

<h2>Here are the tasks</h2>
<ul>
	{#each list.tasks as task (task.id)}
		<li>{task.title}</li>
	{/each}
</ul>
