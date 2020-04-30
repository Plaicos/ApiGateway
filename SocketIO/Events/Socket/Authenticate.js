var Event = require("../Event")

module.exports = class AuthenticateEvent extends Event {

    static Name = "Authenticate";

    static Handle(socket, params) {
        try {

        }
        catch (erro) {
            throw erro;
        }
    }

    static Emit() {

    }

    static SetCredential() {
        
    }
}