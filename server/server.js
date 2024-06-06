require("dotenv").config();
const express = require ("express");
const cors = require("cors");
const app =express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contactForm-router");
const errorMiddleware = require("./middlewares/error-middleware")
const connectDb = require("./utils/db")


// const corsOptions = {

//     origin: "http://localhost:5173/",
//     methods: "POST, PUT, PATCH, GET, DELETE, HEAD",
//     credentials: true,
// };

// app.use(cors(corsOptions))
app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend URL
}));


app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to the world of Satyam technical mern series")
// });

// app.get("/register",(req,res)=>{
//     res.status(200).send("Welcome to registeration page")
// });
app.use(errorMiddleware);
const PORT =5000;
connectDb()
app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`)
})