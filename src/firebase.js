import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBlQHRCubRbU-wq-pNA0yaVUG_HD5jpfjA",
  authDomain: "career-firebase-app-5a310.firebaseapp.com",
  projectId: "career-firebase-app-5a310",
  storageBucket: "career-firebase-app-5a310.appspot.com",
  messagingSenderId: "429140093777",
  appId: "1:429140093777:web:c72b503f378855188fc170",
  measurementId: "G-Q07B1XXC9N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }