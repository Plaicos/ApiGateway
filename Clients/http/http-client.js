class HttpClient {
    ValidateMetadata(metadata) {
        try {
            let wrongType = (typeof metadata !== "object");
            if (wrongType) {
                throw Error("HttpClient metadata must be an object for serialization");
            }
        }
        catch (erro) {
            throw erro;
        }
    }

    SerializeMetadata(metadata) {
        try {
            return JSON.stringify(metadata);
        }
        catch (erro) {
            throw erro;
        }
    }

    async Post(uri, metadata) {
        try {
            if (metadata) {
                this.ValidateMetadata(metadata);
                metadata = this.SerializeMetadata(metadata);
            }
            let response = await axios.post(uri, metadata);
            return response;
        }
        catch (erro) {
            throw erro;
        }
    }
}
HttpClient = new HttpClient();