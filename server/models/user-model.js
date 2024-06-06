const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type:String,
        reuquire:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAadmin:{
        type:Boolean,
        default:false,
    },
})

//secure the password data with bcrypt before commit of the Userobject this function will be executed

userSchema.pre("save",async function(next){
    const user = this;

    if(!user.isModified("password")){
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        // console.log(saltRound,user)
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
})

//Create password compare function :

userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password,this.password)
}

//json web token

userSchema.methods.generateToken = async function (){
    try {
        return jwt.sign({
            userID: this._id.toString(),
            email: this.email,
            isAdmin: this.isAadmin,
        },

        process.env.JWT_SIGNATURE_KEY,{
            expiresIn:"30d",
        }
    );
    } catch (error) {
        console.error(error);
        
    }
}
const User = new mongoose.model("User",userSchema);
module.exports = User;