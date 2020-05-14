module.exports = class Environment {
    static Variables = require("./Variables/variables");

    static InitializeVariables() {
        try {
            let varArr = Object.keys(this.Variables);
            for (let variable of varArr) {
                process.env[variable] = this.Variables[variable];
            }
        }
        catch (erro) {
            throw erro;
        }
    }
}