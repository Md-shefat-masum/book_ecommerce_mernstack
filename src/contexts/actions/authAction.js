import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGDDARcbcDL34cpRi4mrKXkAMDB0CPZEo",
    authDomain: "ecommerce-project-875a9.firebaseapp.com",
    projectId: "ecommerce-project-875a9",
    storageBucket: "ecommerce-project-875a9.appspot.com",
    messagingSenderId: "316653862102",
    appId: "1:316653862102:web:a61bf008d0871f65161d77",
    measurementId: "G-5CEPKCGVCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

const authAction = (state, action) => {
    console.log(state, action);

    if (action.type === 'loginWithGoogle') {
        signInWithPopup(auth, provider)
            .then((result) => {
                // console.log(result);
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert(errorCode + ' ' + errorMessage);
                console.log(error);
            });
    }

    if (action.type === 'save_google_login_data') {
        state.checkAuth = true;
        state.authDetails = {
            name: action.value.name,
            email: action.value.email,
            photo: action.value.photo,
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
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('loged out');
        }).catch((error) => {
            console.log(error);
            // An error happened.
        });

        state.checkAuth = false;
        state.authDetails = {
            name: null,
            email: null,
        }
    }

    console.log('return');

    return {
        ...state
    }
}

export default authAction;