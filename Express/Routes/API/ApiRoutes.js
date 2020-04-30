var router = require("express").Router();
var viewRouter = require("./View/ViewApiRouter")

router.use("/view", viewRouter);

module.exports = router;