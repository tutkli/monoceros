import { getContext, setContext } from 'svelte'
import { liveQuery, type Observable } from 'dexie'
import { db } from '$lib/db'

const TASKS_CTX = Symbol('tasks_ctx')

export function setTasksState() {
	const query = liveQuery(() => db.tasks.toArray())
	setContext(TASKS_CTX, query)
	return query
}

export function getTasksState() {
	return getContext<
		Observable<
			{
				id: string
				list: string
				title: string
				completed: boolean
				description?: string | undefined
			}[]
		>
	>(TASKS_CTX)
}
