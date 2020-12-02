

import firebase from 'firebase/app';
import 'firebase/database' ;
import 'firebase/auth';



var firebaseConfig = {
    apiKey: "AIzaSyDq2QcjTzT6j2hT4ltpE9Vpf_X4okgAc2Q",
    authDomain: "chatappbyali.firebaseapp.com",
    databaseURL: "https://chatappbyali.firebaseio.com",
    projectId: "chatappbyali",
    storageBucket: "chatappbyali.appspot.com",
    messagingSenderId: "23881618106",
    appId: "1:23881618106:web:1085f853230ae0d67e2883",
    measurementId: "G-TH5QTPQ9SZ"
  };
  // Initialize Firebase
 var Firebase = firebase.initializeApp(firebaseConfig);
 export default Firebase
