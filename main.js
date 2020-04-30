var App = require("./Application");
var Express = require("./Express/Express");
var SocketIO = require("./SocketIO/SocketIO");
var gRPC = require("./gRPC/gRPC");

async function Execute() {
    try {
        await App.InitializeAsync();
        Express.Initialize();
        SocketIO.Initialize();
        gRPC.InitializeServer();
    }
    catch (erro) {
        throw erro;
    }
}
Execute();