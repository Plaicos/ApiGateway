module.exports = class Event {
    static Name;
    static Emit() {
        throw Error("Socket Io event error: Emit() was not implemented");
    }
    static Handle() {
        throw Error("Socket Io event error: Handle() was not implemented");
    }
}