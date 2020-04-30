var router = require("express").Router();
var Controller = require("../../../../App/Controllers/Express/ExpressController")

router.get("/get-template", async (req, resp) => {
    await Controller.GetView(req, resp);
})

module.exports = router;