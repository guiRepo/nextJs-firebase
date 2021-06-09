import firebase from 'firebase'

const firebaseConfig = {
    apiKey:"",
    authDomain:"",
    databaseURL:"",
    projectId:"",
    storageBucket:"",
    messagingSenderId:"",
    appId:""
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