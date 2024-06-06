const mongoose = require("mongoose");

const contactFormschema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
})

const contact = new mongoose.model("Contact", contactFormschema);

module.exports = contact;