<script lang="ts">
	import TaskRow from '$lib/components/TaskRow.svelte'
	import { page } from '$app/stores'
	import { getListsState } from '$lib/stores/lists.store'
	import { getTasksState } from '$lib/stores/tasks.store'

	const listsState = getListsState()
	const allTasks = getTasksState()
	$: selectedList = $listsState?.find(list => list.id === $page.params.listId)
	$: selectedListTasks = $allTasks?.map(task => task.list === $page.params.listId) || []
</script>

{#if selectedList}
	<h2 class="text-xl font-semibold">{selectedList.name}</h2>

	<ul class="space-y-2">
		{#each selectedListTasks as task (task.id)}
			<TaskRow bind:task />
		{/each}
	</ul>
{/if}
