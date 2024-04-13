import { z } from 'zod'

const taskSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string().optional(),
	completed: z.boolean(),
})

export type Task = z.infer<typeof taskSchema>

const listSchema = z.object({
	id: z.string(),
	name: z.string(),
	tasks: z.array(taskSchema),
})

export type List = z.infer<typeof listSchema>
