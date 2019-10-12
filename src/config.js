import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyAe8Nc2wKq0lNt1NC2xIGm3EI3mWob3BOg",
    authDomain: "android-e9681.firebaseapp.com",
    databaseURL: "https://android-e9681.firebaseio.com",
    projectId: "android-e9681",
    storageBucket: "android-e9681.appspot.com",
    messagingSenderId: "204813952420",
};
let app = Firebase.initializeApp(config);
const db = app.database().ref('/');
export default db;
