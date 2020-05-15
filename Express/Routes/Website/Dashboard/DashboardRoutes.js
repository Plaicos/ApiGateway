var router = require("express").Router();
var MainController = require("../../../../App/Controllers/Express/MainController");
var Controller = require("../../../../App/Controllers/Express/DashboardController");

router.get("/", async (req, resp) => {
    let isAuthenticated = Controller.CheckIfRequestIsAuthenticated(req, resp);
    if (!isAuthenticated) {
        return Controller.AskForAuthentication(req, resp);
    }
    await Controller.GetCorrespondingDashboardSelector(req, resp);
    await Controller.SetDashboardSession(req, resp);
    return await MainController.GetHtml(req, resp);
});

router.get("/profile", async (req, resp) => {
    let isAuthenticated = Controller.CheckIfRequestIsAuthenticated(req, resp);
    if (!isAuthenticated) {
        return Controller.AskForAuthentication(req, resp);
    }
    Controller.SetPageSelector(req, resp);
    req.query.selector.name = "Profile";
    MainController.SetSession(req, resp);
    await MainController.GetHtml(req, resp);
});

module.exports = router;