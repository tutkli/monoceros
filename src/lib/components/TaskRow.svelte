<script lang="ts">
	import type { Task } from '$lib/schemas/list.schema'
	import { Checkbox } from '$lib/components/ui/checkbox'
	import { Label } from '$lib/components/ui/label'
	import { Button } from '$lib/components/ui/button'
	import { EllipsisVertical } from 'lucide-svelte'
	import { onMount } from 'svelte'
	import { annotate } from 'rough-notation'
	import type { RoughAnnotation } from 'rough-notation/lib/model'

	export let task: Task
	let mounted: boolean
	let element: HTMLSpanElement
	let annotation: RoughAnnotation

	$: {
		if (mounted) {
			if (task.completed) annotation.show()
			else annotation.hide()
		}
	}

	onMount(() => {
		annotation = annotate(element, {
			type: 'strike-through',
			color: '#3241AE',
		})

		mounted = true
	})
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
			class="text-sm font-medium leading-none text-foreground peer-checked:opacity-70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
			<span bind:this={element}>{task.title}</span>
		</Label>
	</div>

	<div class="ml-auto">
		<Button variant="secondary" size="icon">
			<EllipsisVertical class="size-5" />
		</Button>
	</div>
</li>
