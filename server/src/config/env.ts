import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(4000)
})

const parsed = envSchema.safeParse({
  PORT: process.env.PORT
})

if (!parsed.success) {
  console.error('Invalid environment variables', parsed.error.flatten().fieldErrors)
  process.exit(1)
}

export const env = parsed.data
