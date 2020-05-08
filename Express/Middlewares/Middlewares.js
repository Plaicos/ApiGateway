var router = require("express").Router();

module.exports = class Middlewares {
    static Parser = require("./parser/parserMiddleware");
    static Token = require("./token/tokenMiddleware");

    static ConfigureAndExport() {
        try {
            router.use(this.Parser);
            router.use(this.Token);
            return router;
        }
        catch (erro) {
            throw erro;
        }
    }
}