var UserService = class {

    BaseUri = "/api/user";

    async GetData(user){
        try {
            let uri = this.BaseUri + `/get-data?user=${user}`;
            let response = await HttpClient.Post(uri);
        } 
        catch (erro) {
            throw erro;
        }
    }
}
UserService = new UserService();