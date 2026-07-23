import {z} from 'zod'

export const AuthSchema = z.object(
  {
    access_token: z
      .string()
      .min(1),
    refresh_token: z.string(),
  }
).strict();

export const ProfileSchema = z.object({
  id: z.number(),
  email: z.email(),
  password: z.string(),
  name: z.string(),
  role: z.string(),
  avatar: z.url(),
  creationAt: z.iso.datetime(),
  updatedAt: z.iso.datetime()
}).strict();

export type AuthType = z.infer<typeof AuthSchema>;
export type ProfileType = z.infer<typeof ProfileSchema>;