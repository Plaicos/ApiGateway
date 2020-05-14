var DependencyManager = new (require("dependency-manager.js"))();

module.exports = class Application {
    static RootPath = __dirname;
    static Errors;
    static Models = require("./App/Models/Models")
    static Presenters
    static Events;
    static Dependencies;
    static UseCases;
    static Adapters;
    static Environment = require("./App/Env/Env");

    static async InitializeAsync() {
        try {
            this.Environment.InitializeVariables();
            await this.InitializeDependenciesAsync();
            this.Adapters = require("./App/Adapters/adapters");
            this.UseCases = require("./App/UseCases/UseCases");
        }
        catch (erro) {
            throw erro;
        }
    }

    static async InitializeDependenciesAsync() {
        try {
            var dependencyList = require("./Dependencies/list");

            for (let dependency of dependencyList) {
                DependencyManager.AddDependency(dependency);
            }
            this.Dependencies = await DependencyManager.InitializeAndExportAsync();
            return
        }
        catch (erro) {
            throw erro;
        }
    }

}