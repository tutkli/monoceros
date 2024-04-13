import { derived, writable } from 'svelte/store'
import type { List } from '$lib/schemas/task.schema'
import { nanoid } from 'nanoid'

export const listsStore = writable<List[]>([
	{
		id: nanoid(),
		name: 'My first List',
		tasks: [
			{
				id: nanoid(),
				title: 'Do this project',
				description: 'A todo list app made with svelte',
				completed: false,
			},
		],
	},
])
