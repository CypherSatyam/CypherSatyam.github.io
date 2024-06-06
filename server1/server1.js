require("dotenv").config();
const express = require("express");
const app = express();
const authrouter = require("./router/auth-routers")
const contactRouter = require("./router/contact-router")
const connectsdb = require("./util/db1")
const errormiddleware = require("./testmiddlewares/error-middleware");

app.use(express.json());
app.use("/", authrouter);
app.use("/form",contactRouter);

// app.get("/login",(req,res)=>{
//     res.status(200).send("Please login to the application")
// });
app.use(errormiddleware);
const PORT = 3000;
connectsdb();
app.listen(PORT, () => {
    console.log(`Our application is running at port:${PORT}`)
})