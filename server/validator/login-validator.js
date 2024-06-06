const {z} = require("zod");

//create an object schema

const loginSchema = z.object ({
    email: z
    .string({message:"email is required"})
    .trim().min(3,{message:"the length of the email should not be less than 3 characters"})
    .max(200,({message:"the length of the email should not exceed 200 character"})),
    password: z
    .string({message:"password is required"})
    .trim().min(7,({message:"password should not be less than 7 characters"}))
    .max(1024,({message:"password should not exceed 1024 characters"}))
});

module.exports  = loginSchema;