// TODO create a Util kind of thing
var Dependency = require("../../Models/Dependency")
var base64 = require("nodejs-base64")

module.exports = class Base64 extends Dependency {
    static InitializeAsyncMustBeCalled = false;
    static Name = "Base64";

    constructor(){
        super();
    }

    Encode(string) {
        try {
            return base64.base64encode(string);
        }
        catch (erro) {
            throw erro;
        }
    }

    Decode(string) {
        try {
            return base64.base64decode(string);
        }
        catch (erro) {
            throw erro;
        }
    }
}