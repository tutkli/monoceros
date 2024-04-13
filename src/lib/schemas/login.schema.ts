import { z } from 'zod'

export const loginSchema = z.object({
	username: z.string().min(3, 'El nombre de usuario debe contener al menos 3 caracteres'),
})

export type LoginSchema = typeof loginSchema
