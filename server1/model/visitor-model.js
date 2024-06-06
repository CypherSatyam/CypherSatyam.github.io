const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const visitorSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
})

//secure the password data with bcrypt before commit of the Userobject this function will be executed

visitorSchema.pre("save", async function (next) {
    const visitor = this;

    if (!visitor.isModified("password")) {
        next();
    }
    try {
        const SaltRound = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(visitor.password, SaltRound);
        visitor.password = encryptedPassword;

    } catch (error) {
        next(error)
    }
})

//Create password compare function :

visitorSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// JWT token generate

visitorSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SiGNATURE_KEY,
            { expiresIn: "30d", }
        )
    } catch (error) {
        console.log(error);
    }
}


const visitor = new mongoose.model("visitor", visitorSchema)

module.exports = visitor;