import { getAuth, signOut } from "firebase/auth";

const authAction = (state, action) => {
    console.log(state, action);

    if (action.type === 'google_login') {
        let name = action.value.name;
        let email = action.value.email;
        let image = action.value.image;

        state.checkAuth = true;
        state.loginMedia = 'google';
        state.authDetails = {
            name,
            email,
            image,
        }
    }

    if (action.type === 'login') {
        let name = action.value.target.name.value;
        let email = action.value.target.email.value;
        let password = action.value.target.password.value;

        state.checkAuth = true;
        state.authDetails = {
            name,
            email,
            password,
        }
    }

    if (action.type === 'logout') {
        state.checkAuth = false;
        state.authDetails = {
            name: null,
            email: null,
        }

        if (state.loginMedia && state.loginMedia === 'google') {
            const auth = getAuth();
            signOut(auth).then(() => {
                console.log('loged out from google');
            }).catch((error) => {
                console.log(error);
            });
            
            delete state.loginMedia;
        }
    }

    return {
        ...state
    }
}

export default authAction;