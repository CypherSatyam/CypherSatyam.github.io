const express = require("express");

const router = express.Router();

const contactForm = require("../controllers/contactFrom-controller");

router.post("/contact", contactForm);

module.exports = router;