var App = require("../../../Application");
var UseCaseOperator = require("../../UseCases/Operator")

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
            //console.log(session);
            return;
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static async SignIn(req, resp) {
        try {
            let request = App.Adapters.Express.Request.ToGrpcSignInRequest(req);
            let response = await App.Dependencies.SCI.User.SignIn(request);
            resp.status(200);
            resp.json(response);
            resp.cookie()
            resp.end();
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static async AuthenticateToken(req, resp) {
        try {
            let request = App.Adapters.Express.Request.ToTokenAuthenticationRequest(req);
            let credential = await UseCaseOperator.AuthenticateToken(request);
            req.credential = credential;
            return;
        }
        catch (erro) {
            throw erro;
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