const mongoose =require("mongoose");

const URI = process.env.MONGODB_URL;

const connectsdb = ()=>{
    try {
        mongoose.connect(URI).then((res)=>{
            console.log("DB connected",res.connection.host);
        })
        .catch(error=>{
            console.log(error);
            process.exit(0);
        })
    } catch (error) {
        console.log("connection to database failed",error);
        process.exit(0);
    }
}

module.exports = connectsdb;