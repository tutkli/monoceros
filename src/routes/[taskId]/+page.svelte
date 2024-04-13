<script lang="ts">
	import type { PageData } from './$types'
	import TaskLi from '$lib/components/TaskLi.svelte'
	import { listsStore } from '$lib/stores/lists.store'
	import { derived, get } from 'svelte/store'

	export let data: PageData
	const selectedList = derived(listsStore, lists => lists.find(list => list.id === data.taskId))

	function handleTaskClick(id: string) {
		const updatedList = get(selectedList)
		if (!updatedList) return

		updatedList.tasks = updatedList.tasks.map(t => {
			if (t.id === id) return { ...t, completed: !t.completed }
			return t
		})

		listsStore.update(lists =>
			lists.map(list => {
				if (list.id === updatedList.id) return updatedList
				return list
			})
		)
	}
</script>

{#if $selectedList}
	<h2 class="text-xl font-semibold">{$selectedList.name}</h2>

	<ul class="space-y-2">
		{#each $selectedList.tasks as task (task.id)}
			<TaskLi {task} on:clicked={() => handleTaskClick(task.id)} />
		{/each}
	</ul>
{/if}
