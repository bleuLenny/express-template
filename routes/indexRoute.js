const express = require("express");
const router = express.Router();

// Routes start here
router.get("/api", (req,res)=>{
    res.send("Hello there")
});
module.exports = router;
