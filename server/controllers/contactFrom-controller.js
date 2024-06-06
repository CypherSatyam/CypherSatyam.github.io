const contact= require("../models/contactForm-model");


const contactForm = async(req,res)=>{
    try {
        console.log(req.body);
        const contactDetail = req.body;
        const addContactDetail = await contact.create(contactDetail);

        console.log(contactDetail)

        res.status(201).json("message send successfully")
    } catch (err) {
        console.log(err)
        const status = 400;
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

module.exports = contactForm;