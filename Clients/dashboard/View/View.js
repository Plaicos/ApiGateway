var View = class {
    SwitchToDefaultTab() {
        Client.Session.currentTab = "default";
    }

    SwitchTab(tab) {
        Client.Session.currentTab = tab;
    }
    
    GetNewProductData() {

    }
}
var View = new View();