var App = require("../../Application");

module.exports = class UseCaseOperator {
    static async AuthenticateToken(request) {
        try {
            await App.UseCases.AuthenticateToken(request)
        }
        catch (erro) {
            throw erro;
        }
    }
}