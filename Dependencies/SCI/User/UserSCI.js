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
                    return resolve(token);
                });
            }
            catch (erro) {
                reject(erro);
            }
        })
    }

    static async GetUserData(user, credential) {
        return new Promise((resolve, reject) => {
            try {
                SCI.Client.User.get_user({ login: user, credential }, (erro, userData) => {
                    if (erro) {
                        return reject(erro);
                    }
                    return resolve(userData);
                });
            }
            catch (erro) {
                reject(erro);
            }
        })
    }
}