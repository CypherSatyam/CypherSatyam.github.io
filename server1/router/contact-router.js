const express = require("express");

const router = express.Router();

const visitorContactdetail = require("../controller/visitorContactDetail");

router.route("/contact").post(visitorContactdetail);

module.exports = router;