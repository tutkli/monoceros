import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { listsStore } from '$lib/stores/lists.store'
import { get } from 'svelte/store'

export const load: PageLoad = ({ params }) => {
	const list = get(listsStore).find(list => list.id === params.taskId)

	if (list) {
		return {
			list,
		}
	}

	error(404, 'Not found')
}
