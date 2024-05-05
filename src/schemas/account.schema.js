import {z} from 'zod';

export const userSignupSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.date(),
    gender: z.enum(['male', 'female', 'others']),
});