import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
	return {
		taskId: params.taskId,
	}
	// error(404, 'Not found')
}
