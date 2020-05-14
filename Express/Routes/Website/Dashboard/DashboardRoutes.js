var router = require("express").Router();
var Controller = require("../../../../App/Controllers/Express/ExpressController");

router.get("/", async (req, resp) => {
    req.query.selector = {
        lib: "Dashboard",
        subject: "Pages",
        name: "SupplierDashboard"
    }
    Controller.SetSession(req, resp);
    await Controller.GetHtml(req, resp);
})

module.exports = router;