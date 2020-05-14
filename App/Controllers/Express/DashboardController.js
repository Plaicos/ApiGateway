var App = require("../../../Application");
var UseCaseOperator = require("../../UseCases/Operator");

module.exports = class DashboardController {
    static async AuthorizeDashboardAccess(req, resp) {
        try {
            let isAuthenticated = this.CheckIfRequestIsAuthenticated(req, resp);
            if (!isAuthenticated) {
                return this.AskForAuthentication(req, resp);
            }
            return;
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static async GetCorrespondingDashboardSelector(req, resp) {
        try {
            this.SetPageSelector(req, resp);
            let userType = await this.GetUserType(req, resp);

            if (userType === "supplier") {
                req.query.selector.name = "SupplierDashboard";
            }
            return req;
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static async GetUserType(req, resp) {
        try {
            let user = req.credential.user;
            let credential = req.credential;
            let type = await App.UseCases.GetUserType(user, credential);
            return type;
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static CheckIfRequestIsAuthenticated(req, resp) {
        try {
            let credential = req.credential;
            if (credential) {
                return true;
            }
            return false;
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static AskForAuthentication(req, resp) {
        try {
            resp.status(401);
            resp.end();
            return;
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }

    }

    static SetPageSelector(req, resp) {
        try {
            req.query.selector = {
                lib: "Dashboard",
                subject: "Pages"
            }
            return req;
        }
        catch (erro) {
            this.HandleError(resp, erro);
        }
    }

    static HandleError(resp, error) {
        try {
            console.log(error);
            resp.status(500);
            //resp.json(error);
            resp.end();
            return;
        }
        catch (erro) {
            resp.status(500);
            //resp.json(erro);
            resp.end();
            console.log(erro);
        }
    }
}