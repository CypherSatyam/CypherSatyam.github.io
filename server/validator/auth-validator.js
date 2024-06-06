const {z} = require("zod");

//create an object schema

const signupSchema = z.object ({
    username : z
    .string({message:"Name is required"})
    .trim().min(3,{message: "Name must be atleast of 3 characters"})
    .max(200,{message:"Name must not be greater than 200 characters"}),
    email : z
    .string({message:"email is required"})
    .trim().min(3,{message: "email must be atleast of 3 characters"})
    .max(200,{message:"email must not be greater than 200 characters"}),
    phone : z
    .string({message:"phone is required"})
    .trim().min(10,{message: "phone must be atleast of 10 characters"})
    .max(10,{message:"phone must not be greater than 10 characters"}),
    password : z
    .string({message:"password is required"})
    .trim().min(7,{message: "password must be atleast of 7 characters"})
    .max(1024,{message:"password must not be greater than 1024 characters"}),
});

module.exports = signupSchema;