import type { PageLoad } from '../../../../.svelte-kit/types/src/routes/(login)/login/$types'
import { superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { loginSchema } from '$lib/schemas/login.schema'

export const load: PageLoad = async () => {
	return {
		form: await superValidate(zod(loginSchema)),
	}
}
