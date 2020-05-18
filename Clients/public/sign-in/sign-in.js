async function signIn(user, password) {
    try {
        let uri = "/api/user/sign-in";
        let data = getFormData("sign-in-form");
        let response = await axios.post(uri, { user: data.user, password: data.password });
        handleSignInResponse(response);
    }
    catch (erro) {
        throw erro;
    }
}

function handleSignInResponse(response) {
    try {
        let wasSuccessful = response.status === 200;
        if (wasSuccessful) {
            response = response.data
            let token = response.session_data.token
            document.cookie = `Authentication-Token=${token}`
            window.location.replace("/dashboard");
        }
        else {
            console.log("Sign In Failed")
            console.log(response);
        }
    }
    catch (erro) {
        throw erro;
    }
}

