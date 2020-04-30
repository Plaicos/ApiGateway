var Service = require("../Service")

class ViewService extends Service {
    Package = "ViewPackage";
    Name = "View";
    Uri = "0.0.0.0:5000";
    Credential = require("grpc").credentials.createInsecure();
}

module.exports = new ViewService();