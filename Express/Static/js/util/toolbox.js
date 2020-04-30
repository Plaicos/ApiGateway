function getFormData(id) {
    try {
        let formData = new Object();
        let serializedForm = $(`#${id}`).serializeArray();
        for (let prop of serializedForm) {
            formData[prop.name] = prop.value;
        }
        return formData;
    }
    catch (erro) {
        throw erro;
    }
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}