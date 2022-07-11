const express = require("express");
const router = express.Router();
const apiController = require("../controller/indexController");

// Routes start here
router.get("/api", apiController.api);
module.exports = router;
