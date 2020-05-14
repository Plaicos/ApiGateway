var express = require("express")
var router = express.Router();
var MainController = require("../../../App/Controllers/Express/MainController")

//authentication token
router.use(async (req, resp, next) => {
    let hasToken = req.cookies["Authentication-Token"];

    if (hasToken) {
        await MainController.AuthenticateToken(req, resp);
    }
    next();
});

module.exports = router;