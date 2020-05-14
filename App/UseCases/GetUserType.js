var App = require("../../Application");

module.exports = async (user) => {
    try {
        let userData = await App.Dependencies.SCI.User.GetUserData(user);
        console.log(userData);
    }
    catch (erro) {
        throw erro;
    }
}