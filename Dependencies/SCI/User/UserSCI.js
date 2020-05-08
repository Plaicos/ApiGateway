var App = require("../../../Application")
var SCI = require("../SCI")

module.exports = class ViewSCI {
    static async SignIn(signInRequest) {
        return new Promise((resolve, reject) => {
            try {
                SCI.Client.User.log_in(signInRequest, (erro, token) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(token);
                });
            }
            catch (erro) {
                reject(erro);
            }
        })
    }
}