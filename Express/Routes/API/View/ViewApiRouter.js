var router = require("express").Router();
var MainController = require("../../../../App/Controllers/Express/MainController")

router.get("/get-template", async (req, resp) => {
    await MainController.GetView(req, resp);
})

module.exports = router;