<script lang="ts">
	import { Button } from '$lib/components/ui/button/index'
	import { getListsState } from '$lib/stores/lists.store.js'
	import { derived } from 'svelte/store'
	import { type Task} from '$lib/schemas/task.schema'
	import TaskRow from '$lib/components/TaskRow.svelte'

	const listsState = getListsState()
	const allTasks = derived(listsState, ($listState) => {
		return $listsState.reduce((acc: Task[], curr) => {
			return [...acc, ...curr.tasks]
		}, [])
	})
</script>

{#if $listsState.length === 0}
	<div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
		<div class="flex flex-col items-center gap-1 text-center">
			<h3 class="text-2xl font-bold tracking-tight">You have no tasks</h3>
			<p class="text-sm text-muted-foreground">Create a new task to start being productive.</p>
			<Button class="mt-4">Add Task</Button>
		</div>
	</div>
{:else}
	<ul class="space-y-2">
		{#each $allTasks as task (task.id)}
			<TaskRow {task} />
		{/each}
	</ul>
{/if}
