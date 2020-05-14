var App = require("../../Application");

module.exports = async (request) => {
    try {
        return await App.Dependencies.SCI.Auth.AuthenticateToken(request.Token);
    }
    catch (erro) {
        throw erro;
    }
}