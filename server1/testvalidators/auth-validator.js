const { z } = require("zod");


//create an object schema to validate


const registerationSchema = z.object({
    username: z
        .string({ message: "Name is required" })
        .trim().min(3, { message: "The length of the username should not be less than 3 characters." })
        .max(200, { message: "The length of the username should not exceed 200 characters." }),
    email: z
        .string({ message: "Email is required" })
        .trim().min(15, { message: "the length of the email should not be less than 15 characters" })
        .trim().max(200, { message: "Email should not exceed 200 characters" }),
    password: z
        .string({ message: "password is requiered" })
        .trim().min(5, { message: "the length of the password should not be less than 5 characters" })
        .max(200, { message: "the length of the pasword should not exceed 200 characters" }),
    phone: z
        .string({ message: "phone is required" })
        .trim().min(10, { message: "the length of the phone should not be less than 10 characters" })
        .max(10, { message: "the length of the phone should not exceed 10 characters" }),

});

module.exports = registerationSchema;