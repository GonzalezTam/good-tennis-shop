import firebase from 'firebase/app';
import '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6ZsuwGRWoFrHoIIHc8h7qZY1wuLwqhN8",
    authDomain: "the-good-tennis.firebaseapp.com",
    projectId: "the-good-tennis",
    storageBucket: "the-good-tennis.appspot.com",
    messagingSenderId: "667227144431",
    appId: "1:667227144431:web:0bc446c95435f004fc1b1a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app);
}