import { type Writable, writable } from 'svelte/store'
import type { List } from '$lib/schemas/task.schema'
import { nanoid } from 'nanoid'
import { getContext, setContext } from 'svelte'

const dummyData: List[] = [
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
]

const LISTS_CTX = 'lists_ctx';

export function setListsState(initialData: List[] = dummyData) {
	const listsState = writable<List[]>(initialData);
	setContext(LISTS_CTX, listsState);
	return listsState
}

export function getListsState() {
	return getContext<Writable<List[]>>(LISTS_CTX)
}
