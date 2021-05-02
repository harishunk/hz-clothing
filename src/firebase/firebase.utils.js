import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAe14DYmuF-Erf7k4gqBX8AkDGW_rW0m6Y",
    authDomain: "hz-clothing-db.firebaseapp.com",
    projectId: "hz-clothing-db",
    storageBucket: "hz-clothing-db.appspot.com",
    messagingSenderId: "973143761095",
    appId: "1:973143761095:web:7948537968e1b77dc45ee2",
    measurementId: "G-H6ZLXW67Q7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
