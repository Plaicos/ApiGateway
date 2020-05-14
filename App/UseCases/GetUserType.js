var App = require("../../Application");

module.exports = async (user, credential) => {
    try {
        let userData = await App.Dependencies.SCI.User.GetUserData(user, credential);
        return userData.type;
    }
    catch (erro) {
        throw erro;
    }
}