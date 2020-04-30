var App = require("../../../Application");

module.exports = class ExpressController {
    static async GetView(req, resp, selector) {
        try {
            let request = App.Adapters.Express.Request.ToGrpcTemplateRequest(req);
            let response = await App.Dependencies.SCI.View.GetTemplate(request);
            resp.status(200);
            resp.send(response);
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static async GetHtml(req, resp) {
        try {
            let request = App.Adapters.Express.Request.ToGrpcTemplateRequest(req);
            let response = await App.Dependencies.SCI.View.GetTemplate(request);
            resp.status(200);
            resp.send(response.html);
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static SetSession(req, resp) {
        try {
            let session = App.Adapters.Express.Request.ToSession(req);
            resp.cookie("Plaicos-Session", session, { encode: String });
            console.log(session);
            return;
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static HandleError(resp, error) {
        try {
            resp.status(500);
            resp.json(error);
            resp.end();
            console.log(error);
            return;
        }
        catch (erro) {
            resp.status(500);
            resp.json(erro);
            resp.end();
            throw erro;
        }
    }
}