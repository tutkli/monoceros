import type { PageLoad } from './$types'
import { get } from 'svelte/store'
import { listsStore } from '$lib/stores/lists.store'
import { error } from '@sveltejs/kit'

export const load: PageLoad = ({ params }) => {
	const selectedList = get(listsStore).find(list => list.id === params.taskId)

	if (selectedList) {
		return {
			selectedList,
		}
	}

	error(404, 'Not found')
}
