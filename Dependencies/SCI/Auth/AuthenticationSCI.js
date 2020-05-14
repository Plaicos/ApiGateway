var SCI = require("../SCI")

module.exports = class AuthSCI {
    static async AuthenticateToken(token) {
        return new Promise((resolve, reject) => {
            try {
                SCI.Client.Authenticator.authenticate({ token }, (erro, credential) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(credential);
                });
            }
            catch (erro) {
                reject(erro);
            }
        })
    }

}