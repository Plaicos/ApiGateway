var router = require("express").Router();
var viewRouter = require("./View/ViewApiRouter");
var userRouter = require("./User/UserApiRoutes")

router.use("/view", viewRouter);
router.use("/user", userRouter);

module.exports = router;