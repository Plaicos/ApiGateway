window.initialStates = {
    formIsSelected: false,
    selectedForm: ""
}

window.customComponentsToLoad = [
    {
        name: "sign-up-form"
    }
]

window.buildCustomComponents = () => {
    Vue.component(Client.Components['sign-up-form'].name, {
        template: Client.Components['sign-up-form'].html,
        props: ["session"]
    });
}

function selectForm(string) {
    Client.Session.formIsSelected = true;
    Client.Session.selectedForm = string;
}