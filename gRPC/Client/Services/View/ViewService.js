var Service = require("../Service")

class ViewService extends Service {
    Package = "ViewPackage";
    Name = "View";
    Uri = "52.67.162.158:5000";
    Credential = require("grpc").credentials.createInsecure();
}

module.exports = new ViewService();