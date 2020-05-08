var App = require("../../../Application");

module.exports = class ExpressRequestAdapter {
    static ToGrpcTemplateRequest(request) {
        try {
            let templateRequest = new Object()//App.Models.request.gRPC.TemplateRequest();
            templateRequest.selector = request.query.selector;
            templateRequest.params = request.params;
            templateRequest.credential = request.credential;
            return templateRequest;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ToSession(req) {
        try {
            let session = new Object();
            session.currentPage = req.query.selector.name;
            session = JSON.stringify(session);
            //session = App.Dependencies.Base64.Encode(session);
            return session;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ToGrpcSignInRequest(req) {
        try {
            let signInRequest = new Object();
            signInRequest.login = req.body.user;
            signInRequest.password = req.body.password;
            return signInRequest;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ToTokenAuthenticationRequest(req) {
        try {
            let token = req.cookies["Authentication-Token"];
            return new App.Models.TokenAuthentication(token);
        }
        catch (erro) {
            throw erro;
        }
    }
}