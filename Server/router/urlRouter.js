const express = require("express");
const router = express.Router();
const { handleUrlShortening } = require("../controller/urlcontroller");
router.post("/postnewurl", handleUrlShortening);
module.exports = router;
