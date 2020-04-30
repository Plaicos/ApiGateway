var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
var Config = require("./Config");

module.exports = class ServiceBuilder {

    static Config = new Config();

    static BuildService() {
        try {
            let packageDefinition = protoLoader.loadSync(this.Config.ProtoPath, this.Config);
            let service = grpc.loadPackageDefinition(packageDefinition)[`${this.Config.PackageName}`][`${this.Config.ServiceName}`].service
            return service;
        }
        catch (erro) {
            throw erro;
        }
    }
}