import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCL36Ksj3f0_0rzNPYr8SxyjPxPfcO5IpY",
    authDomain: "yoktubespam.firebaseapp.com",
    projectId: "yoktubespam",
    storageBucket: "yoktubespam.appspot.com",
    messagingSenderId: "320940125483",
    appId: "1:320940125483:web:9ccfd65acc156517a7a96e"
  };
  // Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();
