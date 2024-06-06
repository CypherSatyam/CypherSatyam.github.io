const express = require("express");
const router = express.Router();
const {home,register,login} = require("../controllers/auth-contoller");
const signupSchema = require("../validator/auth-validator");
const validator = require("../middlewares/validate-middleware");
const loginSchema = require("../validator/login-validator");

// const controllers = require("../controllers/auth-contoller");

// we can also directly give a name to variable and
// use functions inside it. eg-controllers.register

router.get("/",home);
// 2nd way of defining routes in express
// router.route("/").get((req,res)=>{
//     res.status(200).send("Welcome to satyam technical usingRouter")
// });

router.route("/register").post(validator(signupSchema),register)

router.post("/login",validator(loginSchema),login);

module.exports = router;