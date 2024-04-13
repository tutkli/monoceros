import { z } from 'zod'

const userSchema = z.object({
	username: z.string().nullable(),
})

export type User = z.infer<typeof userSchema>
