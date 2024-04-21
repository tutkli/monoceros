import { getContext, setContext } from 'svelte'
import { liveQuery, type Observable } from 'dexie'
import { db } from '$lib/db'

const LISTS_CTX = Symbol('lists_ctx')

export function setListsState() {
	const query = liveQuery(() => db.lists.toArray())
	setContext(LISTS_CTX, query)
	return query
}

export function getListsState() {
	return getContext<Observable<{ id: string; description: string; name: string }[]>>(LISTS_CTX)
}
