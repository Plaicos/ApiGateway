var router = require("express").Router();
var MainController = require("../../../../App/Controllers/Express/MainController");
var Controller = require("../../../../App/Controllers/Express/DashboardController");

router.get("/", async (req, resp) => {
    let isAuthenticated = Controller.CheckIfRequestIsAuthenticated(req, resp);
    if (!isAuthenticated) {
        return Controller.AskForAuthentication(req, resp);
    }
    req = await Controller.GetCorrespondingDashboardSelector(req, resp);
    MainController.SetSession(req, resp);
    return await MainController.GetHtml(req, resp);
})

module.exports = router;