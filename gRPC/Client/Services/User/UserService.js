var Service = require("../Service")

class UserService extends Service {
    Package = "UserPackage";
    Name = "User";
    Uri = "18.231.125.127:3000";
    Credential = require("grpc").credentials.createInsecure();
}

module.exports = new UserService();