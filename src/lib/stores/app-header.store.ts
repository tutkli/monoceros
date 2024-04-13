import { writable } from 'svelte/store'

type AppHeader = {
	title: string
}

function createHeader() {
	const { subscribe, set, update } = writable<AppHeader>({
		title: 'Monoceros'
	})

	return {
		subscribe,
		setTitle: (title: string) => update(header => ({ ...header, title }))
	}
}

export const headerStore = createHeader()
