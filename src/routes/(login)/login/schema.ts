import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email('El email es obligatorio'),
})

export type LoginSchema = typeof loginSchema
