import {z} from 'zod';

export const userSignupSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.string().date(),
    gender: z.enum(['male', 'female', 'others']),
});

export const userLoginSchema = z.object({
    username: z.string(),
    password: z.string().min(8),
});

export const tokenSchema = z.object({
    token: z.string(),
});