var grpc = require("grpc")

module.exports = class GrpcServerBuilder {

    static Server;
    static Config = require("./Config")

    static BuildServer(service, serviceImplementaion){
        if (!service) {
            console.log("gRPC server is missing the service")
            process.abort()
        }
        if (!serviceImplementaion) {
            console.log("WARNING! gRPC server is missing the service implementation")
        }

        this.Server = new grpc.Server();
        this.Server.addService(service, serviceImplementaion);
        this.Server.bind(this.Config.port, this.Config.credential);

        return this.Server;
    }
}