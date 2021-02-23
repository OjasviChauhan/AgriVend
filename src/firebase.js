import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDnJdshSB6-lxZ4Nq9UuLIJHoXKFrKhIXI",
  authDomain: "agrivend-896a2.firebaseapp.com",
  projectId: "agrivend-896a2",
  storageBucket: "agrivend-896a2.appspot.com",
  messagingSenderId: "434402064624",
  appId: "1:434402064624:web:6c2838a481cbf12e0faa35",
  measurementId: "G-KFG902RCEF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, firebaseApp };
