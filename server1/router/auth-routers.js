const express =require("express");
const router = express.Router();
const {home,login,register} = require("../controller/auth-controllers");
const validator = require("../testmiddlewares/validate-middleware");
const loginSchema = require("../testvalidators/login-validator")
const registerationSchema = require("../testvalidators/auth-validator");


router.get("/",home);

router.route("/register").post(validator(registerationSchema),register);
router.post("/login",validator(loginSchema),login)

module.exports = router;