const bcrypt = require("bcryptjs");
const visitor = require("../model/visitor-model");
const registerationSchema = require("../testvalidators/auth-validator")


const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to Satyam's technical world")
    } catch (error) {

    }
}

const register = async (req, res) => {
    try {
        const { username, password, phone, email } = req.body;
        const UserExist = await visitor.findOne({ email: email });

        if (UserExist) {
            return res.status(400).json({ msg: "email already exists" });
        }

        // hash the password
        // const saltRound = 10;
        // const encryptedPassword = await bcrypt.hash(password,saltRound);

        const data = await visitor.create({ username, password, phone, email });
        res.status(200).json({
            msg: data,
            token: await data.generateToken(),
            UserId: data._id.toString()
        })
    } catch (error) {
        console.log(error);
        res.status(500).json("internal server error");
    }
}

const login = async (req, res) => {
    try {


        const { email, password } = req.body;
        const userExist = await visitor.findOne({ email: email });

        if (!userExist) {
            return res.status(400).json({ message: "Credentials invalid" });

        }
        //compare the hashed password
        //  const passwordMatch  = await bcrypt.compare(password,userExist.password);

        const passwordMatch = await userExist.comparePassword(password);

        if (passwordMatch) {
            res.status(200).json({
                msg: "login successful",
                token: await userExist.generateToken(),
                userID: userExist._id.toString()

            })
        }
        else {
            res.status(400).json({ msg: "Invalid email or password" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal server error" })
    }
}

module.exports = { home, register, login };