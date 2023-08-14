import * as z from 'zod'

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, {message: "Minimum 3 characters for your Name"}).max(30),
    username: z.string().min(3, {message: "Username has to be minimum 5 characters"}).max(15),
    bio: z.string().min(5).max(1000),
})