<script lang="ts">
	import type { Task } from '$lib/schemas/task.schema'
	import { Checkbox } from '$lib/components/ui/checkbox'
	import { Label } from '$lib/components/ui/label'
	import { Button } from '$lib/components/ui/button'
	import { EllipsisVertical } from 'lucide-svelte'

	export let task: Task
</script>

<li class="flex items-center rounded-md bg-background px-4 py-2 shadow-sm">
	<div class="flex items-center space-x-2">
		<Checkbox
			id={task.id + '-checkbox'}
			bind:checked={task.completed}
			aria-labelledby={task.id + '-label'} />
		<Label
			id={task.id + '-label'}
			for={task.id + '-checkbox'}
			class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
			{task.title}
		</Label>
	</div>

	<div class="ml-auto">
		<Button variant="secondary" size="icon">
			<EllipsisVertical class="size-5" />
		</Button>
	</div>
</li>
