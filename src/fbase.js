import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBY6GjitoeVnbrdtpsAAwO-zuSXAmA_H1s",
    authDomain: "twitter-81a8c.firebaseapp.com",
    projectId: "twitter-81a8c",
    storageBucket: "twitter-81a8c.appspot.com",
    messagingSenderId: "540503069743",
    appId: "1:540503069743:web:653ccbf3696ecb95c4e2da"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();