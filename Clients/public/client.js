var Client = class {
    BaseSelector = {
        lib: "Public",
        subject: "Components"
    }

    ComponentsToLoad;

    DefaultComponentsToLoad = [
        {
            name: "vheader",
        }
    ];

    Components = new Object();

    BaseUri = "plaicos.com.br";

    App;

    Session;

    async InitializeAsync() {
        try {
            this.LoadSession();
            await this.LoadComponents();
            this.BuildComponents();
            this.CreateVueApp();
            console.log("Vue Client Loaded");
        }
        catch (erro) {
            throw erro;
        }
    }

    CreateVueApp() {
        try {
            this.App = new Vue({
                el: "#app",
                data: {
                    session: this.Session
                }
            })
        }
        catch (erro) {
            throw erro;
        }
    }

    async LoadComponents() {
        try {
            this.JoinComponentsList();
            for (let component of this.ComponentsToLoad) {
                await this.LoadSingleComponent(component);
            }
        }
        catch (erro) {
            throw erro;
        }
    }

    async LoadSingleComponent(component) {
        try {
            let selector = this.BaseSelector;
            selector.name = component.name;
            component.html = await this.LoadComponentHtml(selector);
            this.Components[component.name] = component;
        }
        catch (erro) {
            throw erro;
        }
    }

    JoinComponentsList() {
        try {
            if (!window.customComponentsToLoad) {
                window.customComponentsToLoad = [];
            }
            this.ComponentsToLoad = this.DefaultComponentsToLoad.concat(window.customComponentsToLoad);
        }
        catch (erro) {
            throw erro;
        }
    }

    async LoadComponentHtml(selector) {
        try {
            let param = JSON.stringify(selector);
            let response = await axios.get(this.BaseUri + "/api/view/get-template?selector=" + param);
            return response.data.html;
        }
        catch (erro) {
            throw erro;
        }
    }

    BuildComponents() {
        try {
            console.log("started building")
            if (window.buildCustomComponents) {
                window.buildCustomComponents();
            }
            this.BuildDefaultComponents();
            console.log("finished building")
        }
        catch (erro) {
            throw erro;
        }
    }

    BuildDefaultComponents() {
        try {
            Vue.component(Client.Components.vheader.name, {
                template: Client.Components.vheader.html,
                props: ["session"]
            });
        }
        catch (erro) {
            throw erro;
        }
    }

    LoadSession() {
        try {
            let states = window.initialStates;
            if (!states) {
                states = {}
            }
            this.Session = JSON.parse(getCookie("Plaicos-Session"));
            this.Session = Object.assign(this.Session, states);
        }
        catch (erro) {
            throw erro;
        }
    }
}

// just to show what a component should look like. This class has no use.
class Component {
    name;
    html;
    selector;
}

window.onload = async () => {
    Client = new Client();
    await Client.InitializeAsync();
}