const { z } = require("zod");

const loginSchema = z.object({
    email: z
        .string({ message: "Username is required" })
        .trim().min(5, { message: "the length of the username should not be less than 5 characters" })
        .max(200, { message: "the length of the microflow should not exceed 200 characters" }),
    password: z
        .string({ message: "Password is required" })
        .trim().min(7, { message: "the length of the password should not be less than 7 characters" })
        .max(200, { message: "the length of the password should not exceed 200 characters" }),
})

module.exports = loginSchema;