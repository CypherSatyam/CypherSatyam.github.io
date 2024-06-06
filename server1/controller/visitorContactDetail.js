const contact = require("../model/contactForm");

const visitorContactdetail = async (req,res)=>{
    try {
        const visitorContact =  req.body;
        console.log(visitorContact)
        const addContact = await contact.create(visitorContact)
        

        res.status(201).json("Message Saved successfully")
        
    }
    catch(err){
        const status = err.status;
        const message = "Contact details not saved";
        const extradetails = err.errors;

        const error = {
            status,
            message,
            extradetails,
        }
        next(error);
    }
}

module.exports = visitorContactdetail;