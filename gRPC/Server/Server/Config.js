var CredentialFactory = new (require("../Credential/CredentialFactory"))()

var server_config = {
    credential: CredentialFactory.makeCredential(),
    port: "0.0.0.0:4000"
}

module.exports = server_config;