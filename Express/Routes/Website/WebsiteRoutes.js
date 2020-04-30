var router = require("express").Router();
var Controller = require("../../../App/Controllers/Express/ExpressController");

router.get("/sign-up", async (req, resp) => {
    req.query.selector = {
        lib: "Public",
        subject: "Pages",
        name: "SignUp"
    }
    Controller.SetSession(req, resp);
    await Controller.GetHtml(req, resp);
});

router.get("/sign-in", async (req, resp) => {
    req.query.selector = {
        lib: "Public",
        subject: "Pages",
        name: "SignIn"
    }
    Controller.SetSession(req, resp);
    await Controller.GetHtml(req, resp);
});

router.get("/", async (req, resp) => {
    req.query.selector = {
        lib: "Public",
        subject: "Pages",
        name: "Home"
    }
    console.log("request home ")
    Controller.SetSession(req, resp);
    await Controller.GetHtml(req, resp);
});

module.exports = router;