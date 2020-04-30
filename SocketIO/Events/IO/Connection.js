var Event = require("../Event");

module.exports = class ConnectionEvent extends Event {
    static Name = "connection";

    static Handle(socket) {
        try {
            ConnectionEvent.SetSocketEvents(socket);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static SetSocketEvents(socket) {
        try {
            var SocketIo = require("../../SocketIO");
            var socketEvents = SocketIo.SocketEvents;
            this.SetEvent(socketEvents.Authenticate, socket);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static SetEvent(event, socket) {
        try {
            socket.on(event.Name, async (params) => {
                await event.Handle(socket, params);
            })
        }
        catch (erro) {
            throw erro;
        }
    }
}