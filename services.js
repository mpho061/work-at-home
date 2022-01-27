import "firebase/firestore";
import { Alert } from "react-native";
import { firebase } from "./config/firebaseConfig";
require('firebase/auth')


export async function registration(email, password, lastname, firstname) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid);
        const db = firebase.firestore();
        db.collection("users").doc(currentUser.uid).set({
            email: currentUser.email,
            lastname: lastname,
            firstname: firstname,
        });

    } catch (error) {
        Alert.alert("There is something wrong!!!", error.message);
        console.log(error.message);
    }
}
export async function signIn(email, password) {  
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

    } catch (err) {
        Alert.alert("There is something wrong!", err.message);
        console.log(err.message);
    }
}

export async function resetPassword(email) {
    try {
        //const user = firebase.auth().currentUser;

        firebase.auth().sendPasswordResetEmail(email).then(() => {
            // Password reset email sent
            console.log("Password reset email sent");
        })

            // console.log("rest button clicked")

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });

    } catch (error) {
        console.log(error.message)
    }
}