import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes/(login)/login/$types'

export const load: PageLoad = async () => {
	const message: string = await new Promise(resolve => {
		setTimeout(() => resolve('this is the data!'), 5000)
	})

	return {
		message,
	}
}
