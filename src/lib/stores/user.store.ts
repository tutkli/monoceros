import { derived, writable } from 'svelte/store'
import type { User } from '$lib/schemas/user.schema'

// function createUserStore() {
// 	const { subscribe, set, update } = writable<User>({
// 		username: null,
// 	})
//
// 	return {
// 		subscribe,
// 	}
// }

export const userStore = writable<User>({
	username: null,
})
export const isAuthenticated = derived(userStore, $user => $user.username !== undefined)
