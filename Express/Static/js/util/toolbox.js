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

//base64
function base64encode(string_to_encode) {
    let encoded_string = btoa(string_to_encode)
    return encoded_string
}

function base64decode(string_to_decode) {
    let decoded_string = atob(string_to_decode)
    return decoded_string
}