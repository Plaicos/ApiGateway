var express = require("express")
var router = express.Router();
var Controller = require("../../../App/Controllers/Express/ExpressController")

//authentication token
router.use(async (req, resp, next) => {
    let hasToken = req.cookies["Authentication-Token"];

    if (hasToken) {
        await Controller.AuthenticateToken(req, resp);
    }
    next();
});

module.exports = router;