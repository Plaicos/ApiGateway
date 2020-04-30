var socketIO = require("socket.io");

module.exports = class SocketIO {

    static Io;

    static SocketEvents = require("./Events/Socket/SocketEvents");

    static IoEvents = require("./Events/IO/IoEvents");

    static Initialize() {
        try {
            this.StartServer();
            this.SetEventHandlers();
        }
        catch (erro) {
            throw erro;
        }
    }

    static StartServer() {
        try {
            var HttpServer = require("../Express/Express").Server
            this.Io = socketIO(HttpServer);
            console.log("Socket Io Server attached and running")
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static SetEventHandlers() {
        try {
            this.Io.on(this.IoEvents.Connection.Name, this.IoEvents.Connection.Handle);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }
}