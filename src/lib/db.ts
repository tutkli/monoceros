import Dexie, { type Table } from 'dexie'
import type { List, Task } from '$lib/schemas/list.schema'

export class MonocerosDB extends Dexie {
	lists!: Table<List>
	tasks!: Table<Task>

	constructor() {
		super('MonocerosDB')
		this.version(1).stores({
			lists: '++id, name, description',
			tasks: '++id, list, title, description',
		})
	}
}

export const db = new MonocerosDB()
