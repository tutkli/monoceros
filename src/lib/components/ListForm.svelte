<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js'
	import { Input } from '$lib/components/ui/input/index.js'
	import { Label } from '$lib/components/ui/label/index.js'
	import * as Popover from '$lib/components/ui/popover/index.js'
	import { Plus } from 'lucide-svelte'
	import { Textarea } from '$lib/components/ui/textarea'
	import { db } from '$lib/db'
	import { nanoid } from 'nanoid'

	let name: string = ''
	let description: string = ''

	async function createList() {
		if (!name.length) return

		try {
			const id = await db.lists.add({
				id: nanoid(),
				name,
				description,
			})

			console.log(`List ${name} successfully added. Got id ${id}`)
		} catch (error) {
			console.log(`Failed to add ${name}: ${error}`)
		}
	}
</script>

<Popover.Root>
	<Popover.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline">
			<Plus class="mr-2 size-5" />
			Create new list
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-96 max-w-96" side="right" sideOffset={8}>
		<div class="grid gap-4">
			<div class="grid gap-2">
				<div class="grid items-center gap-4">
					<Label for="name" class="sr-only">List name</Label>
					<Input id="name" bind:value={name} placeholder="Name" />
				</div>
				<div class="grid items-center gap-4">
					<Label for="description" class="sr-only">List description</Label>
					<Textarea id="description" bind:value={description} placeholder="Description" />
				</div>
				<Button on:click={createList}>Create</Button>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
