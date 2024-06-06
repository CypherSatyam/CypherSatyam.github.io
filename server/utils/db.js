const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = () => {
    try {
        mongoose.connect(URI).then((res) => {
            console.log("DB connected ", res.connection.host)
        }).catch(error => {
            console.log(error)
            process.exit(0);
        })
    } catch (error) {
        console.log("Connection to database failed", error);
        process.exit(0);
    }
}

module.exports = connectDb;