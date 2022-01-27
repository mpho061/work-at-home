import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyCyavyGgrH9TyA2-2TzcgjV0rs4Z4z0GdY",
    authDomain: "vending-machine-b784c.firebaseapp.com",
    projectId: "vending-machine-b784c",
    storageBucket: "vending-machine-b784c.appspot.com",
    messagingSenderId: "579250232703",
    appId: "1:579250232703:web:17fde146991a7598a34e4a"
}

firebase.initializeApp(firebaseConfig);
export { firebase };