var router = require("express").Router();

module.exports = class Router {
    static WebsiteRouter = require("./Website/WebsiteRoutes");
    static ApiRouter = require("./API/ApiRoutes");

    static ConfigureAndExport() {
        try {
            router.use("/api", this.ApiRouter);
            router.use(this.WebsiteRouter);
            return router;
        }
        catch (erro) {
            throw erro;
        }
    }
}