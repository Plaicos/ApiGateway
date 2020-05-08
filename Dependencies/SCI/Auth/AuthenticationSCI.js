var SCI = require("../SCI")

module.exports = class AuthSCI {
    static async AuthenticateToken(request) {
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