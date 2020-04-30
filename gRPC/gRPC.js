//server stuff
var gRPCServerBuilder = require("./Server/Server/ServerBuilder");
var gRPCServiceBuilder = require("./Server/Service/ServiceBuilder");
var gRPCServiceImplementation = require("./Server/ServiceImplementation/ServiceImplementation");
//client stuff
var gRPCServicesBuilder = require("./Client/Services/ServicesBuilder");

module.exports = class gRPC {

    static GrpcServer;

    static GrpcService;

    static ServiceImplementation;

    static GrpcClient;

    static InitializeServer() {
        try {
            this.InitializeServerStaticProps();
            this.StartServer();
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static InitializeServerStaticProps() {
        try {
            this.GrpcService = gRPCServiceBuilder.BuildService();
            this.ServiceImplementation = new gRPCServiceImplementation();
            this.GrpcServer = gRPCServerBuilder.BuildServer(this.GrpcService, this.ServiceImplementation);
        }
        catch (erro) {
            throw erro;
        }
    }

    static StartServer() {
        this.GrpcServer.start();
        console.log("gRPC Server Started");
    }

    static InitializeClient() {
        try {
            this.GrpcClient = gRPCServicesBuilder.BuildServices();
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ExportClient() {
        return this.GrpcClient;
    }
}