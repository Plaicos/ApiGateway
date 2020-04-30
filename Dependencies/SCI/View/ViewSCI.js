var App = require("../../../Application")
var SCI = require("../SCI")

module.exports = class ViewSCI {
    static async GetTemplate(templateRequest) {
        return new Promise((resolve, reject) => {
            try {
                SCI.Client.View.GetTemplate(templateRequest, (erro, template) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(template);
                });
            }
            catch (erro) {
                reject(erro);
            }
        })
    }
}