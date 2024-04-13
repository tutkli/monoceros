<script>
	import { Button } from '$lib/components/ui/button/index'
	import { listsStore } from '$lib/stores/lists.store'
</script>

{#if $listsStore.length === 0}
	<div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
		<div class="flex flex-col items-center gap-1 text-center">
			<h3 class="text-2xl font-bold tracking-tight">You have no tasks</h3>
			<p class="text-sm text-muted-foreground">Create a new task to start being productive.</p>
			<Button class="mt-4">Add Task</Button>
		</div>
	</div>
{:else}
	<p>TODO Mostrar todas las tareas</p>
{/if}
