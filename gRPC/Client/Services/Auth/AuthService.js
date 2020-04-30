var Service = require("../Service")

class AuthService extends Service {
    Package = "AuthPackage";
    Name = "Authenticator";
    Uri = "ec2-54-233-143-207.sa-east-1.compute.amazonaws.com:10000";
    Credential = require("grpc").credentials.createInsecure();
}

module.exports = new AuthService();