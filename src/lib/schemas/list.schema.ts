import { z } from 'zod'

const listSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
})

export type List = z.infer<typeof listSchema>

const taskSchema = z.object({
	id: z.string(),
	list: z.string(),
	title: z.string(),
	description: z.string().optional(),
	completed: z.boolean(),
})

export type Task = z.infer<typeof taskSchema>
