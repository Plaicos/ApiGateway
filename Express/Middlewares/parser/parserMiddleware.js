var express = require("express")
var router = express.Router();

router.use(express.json());

router.use((req, resp, next) => {
    if (req.query.selector) {
        try {
            req.query.selector = JSON.parse(req.query.selector);
            next();
        }
        catch (erro) {
            resp.status(401)
            resp.json({ error: "Seletor de template invalido" });
            resp.end();
        }
    }
    else {
        next()
        return;
    }
})

module.exports = router;