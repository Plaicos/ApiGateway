var router = require("express").Router();
var Controller = require("../../../../App/Controllers/Express/ExpressController");
var MainController = require("../../../../App/Controllers/MainController")

router.post("/sign-in", async (req, resp) => {
    await Controller.SignIn(req, resp);
})

module.exports = router;