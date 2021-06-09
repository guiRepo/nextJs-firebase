import firebase from 'firebase'

const firebaseConfig = {
    apiKey:"AIzaSyDR65aJBVkQzyOEYPXSit9NAFZTfipeP4M",
    authDomain:"blogapp-804b3.firebaseapp.com",
    databaseURL:"",
    projectId:"blogapp-804b3",
    storageBucket:"blogapp-804b3.appspot.com",
    messagingSenderId:"477837141048",
    appId:"1:477837141048:web:efb61fcddfc0fd9dd7b2cd"
};

try {
    firebase.initializeApp(firebaseConfig);
}catch(err){
    if(!/already exist/.test(err.message)){
        console.error('Firebase initialization error', err.stack)
    }
}

const fire = firebase
export default fire