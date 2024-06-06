const User = require("../models/user-model");


const home = async (req,res)=>{
    try {
       res.status(200).send("Welcome to the home page") 
    } catch (error) {
       console.log(error) 
    }
};

const register = async (req,res)=>{
    try {
        // console.log(req.body)
        const {username ,email,phone,password} = req.body;
        const UserExists =  await User.findOne({email:email})

        if (UserExists){
            return res.status(400).json({msg :"email already exists"})
        }
        // // hash the password
        // const saltRound = 10;
        // const has_password = await  bcrypt.hash(password,saltRound);

        const UserCreated = await User.create({username ,email,phone,password});
        res.status(200).json({msg :UserCreated,
            token :await UserCreated.generateToken(),
            userID:UserCreated._id.toString()});

    } catch (error) {
        console.log(error)
        res.status(500).json("internal server error")
        
    }
}

const login = async (req,res)=>{
    try {
        console.log(req.body)
        const {email , password}= req.body;

        const userExist = await User.findOne({email:email});

        if (!userExist){
            return res.status(400).json({message:"Credentials invalid"});
        }
        // const passwordMatch = await bcrypt.compare(password,userExist.password);
        const passwordMatch = await userExist.comparePassword(password);


        if(passwordMatch){
            res.status(200).json({
                message:"login successful",
                token: await userExist.generateToken(),
                userID: userExist._id.toString()

            })

            
        }else{
            res.status(401).json({msg:"Invalid email or password"});
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Internal server error"})
    }
}
module.exports = {home,register,login};