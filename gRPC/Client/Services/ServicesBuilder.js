var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");

module.exports = class ServicesBuilder {

    static Config = require("./Config");

    static ServicesDescriptor;

    static ServiceFactory = require("./ServiceFactory");

    static ServicesList = require("./ServicesList");

    static BuildServices() {
        let services = new Object();
        try {
            this.LoadFromProto();
            for (let service of this.ServicesList) {
                services[service.Name] = this.ServiceFactory.MakeService(this.ServicesDescriptor, service);
            }
            return services;
        }
        catch (erro) {
            throw erro;
        }
    }

    static LoadFromProto() {
        try {
            let packageDefinition = protoLoader.loadSync(this.Config.ProtoPath, this.Config);
            this.ServicesDescriptor = grpc.loadPackageDefinition(packageDefinition);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }
}