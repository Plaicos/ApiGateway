var App = require("../../../Application");

module.exports = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    ProtoPath: App.RootPath + "/gRPC/Client/PROTO/services.proto"
}