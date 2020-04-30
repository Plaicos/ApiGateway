var express = require("express")
var app = express();

module.exports = class Express {

    static Router = require("./Routes/Router");

    static Middlewares = require("./Middlewares/Middlewares")

    static Config = require("./config")

    static Server;

    static StaticDir = __dirname + "\\Static";

    static StaticClientsDir = require("../Clients/path");

    static StaticAssetsDir = this.StaticDir + "\\assets";

    static Initialize() {
        try {
            this.SetStaticRoute();
            this.SetMiddlewares();
            this.SetRoutes();
            this.StartServer();
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static SetRoutes() {
        try {
            let router = this.Router.ConfigureAndExport();
            app.use(router);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static SetMiddlewares() {
        try {
            let router = this.Middlewares.ConfigureAndExport();
            app.use(router);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static SetStaticRoute() {
        try {
            console.log(this.StaticDir)
            app.use("/static", express.static(this.StaticDir));
            app.use("/client", express.static(this.StaticClientsDir));
            app.use("/assets", express.static(this.StaticAssetsDir));
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static StartServer() {
        try {
            this.Server = app.listen(this.Config.port, this.Config.hostname, this.ServerStartedCallback);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ServerStartedCallback() {
        console.log("Express server running on port", Express.Config.port);
    }
}