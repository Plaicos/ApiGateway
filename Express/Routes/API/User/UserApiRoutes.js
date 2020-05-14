var router = require("express").Router();
var MainController = require("../../../../App/Controllers/Express/MainController");

router.post("/sign-in", async (req, resp) => {
    await MainController.SignIn(req, resp);
})

module.exports = router;