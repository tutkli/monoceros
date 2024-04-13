import { writable } from 'svelte/store'
import type { List } from '$lib/schemas/task.schema'
import { nanoid } from 'nanoid'

export const listsStore = writable<List[]>([
	{
		id: 'sJ8_HsHkRNCN21ggUhIpP',
		name: 'My first List',
		tasks: [
			{
				id: nanoid(),
				title: 'Make a todo application',
				description: 'A todo list app made with svelte',
				completed: false,
			},
			{
				id: nanoid(),
				title: 'React to bind changes',
				description: 'Save state when editing a todo',
				completed: true,
			},
			{
				id: nanoid(),
				title: 'Allow to reorder todos with drag and drop',
				completed: false,
			},
			{
				id: nanoid(),
				title: 'Search dialog',
				description: 'Implement search dialog with cmdk-sv',
				completed: false,
			},
			{
				id: nanoid(),
				title: 'Save data in local storage',
				completed: false,
			},
			{
				id: nanoid(),
				title: 'Task detail',
				completed: false,
			},
		],
	},
	{
		id: 'R7u3PGX1rjO2OjWtYdIlo',
		name: 'Something to think about',
		tasks: [
			{
				id: nanoid(),
				title: 'Something to think about a lot',
				completed: false,
			},
		],
	},
])
