module.exports = class Socket {
    Socket;
    Credential;
    CloseConnection(){
        this.Socket.close();
    }
}