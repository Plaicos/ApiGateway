module.exports = class Dependency {
    static InitializeAsyncMustBeCalled = false;
    static Name;
    static async InitializeAsync() {
        throw Error("Dependency initializer was not implemented")
    }
}