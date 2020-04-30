module.exports = class ServiceFactory {

    static MakeService(servicesDescriptor, service) {
        try {
            return new servicesDescriptor[service.Package][service.Name](service.Uri, service.Credential);
        }
        catch (erro) {
            throw erro;
        }
    }
}