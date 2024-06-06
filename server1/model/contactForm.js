const mongoose = require("mongoose");


const contactFormSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
})

const contact = new mongoose.model("VistorContact",contactFormSchema);
module.exports= contact;