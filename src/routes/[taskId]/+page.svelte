<script lang="ts">
	import TaskRow from '$lib/components/TaskRow.svelte'
	import { page } from '$app/stores';
	import { getListsState } from '$lib/stores/lists.store'

	const listsState = getListsState()
	$: selectedList = $listsState.find(list => list.id === $page.params.taskId)
</script>

{#if selectedList}
	<h2 class="text-xl font-semibold">{selectedList.name}</h2>

	<ul class="space-y-2">
		{#each selectedList.tasks as task (task.id)}
			<TaskRow bind:task={task}/>
		{/each}
	</ul>
	{/if}

