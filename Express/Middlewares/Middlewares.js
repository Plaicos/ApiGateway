var router = require("express").Router();

module.exports = class Middlewares {
    static Parser = require("./parser/parserMiddleware");

    static ConfigureAndExport() {
        try {
            router.use(this.Parser);
            return router;
        }
        catch (erro) {
            throw erro;
        }
    }
}