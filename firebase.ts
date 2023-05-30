// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYo_u0vgE5Sw1uq39ZmFCh-YjTSK7oNuw",
    authDomain: "netflix-clone-e7e72.firebaseapp.com",
    projectId: "netflix-clone-e7e72",
    storageBucket: "netflix-clone-e7e72.appspot.com",
    messagingSenderId: "594324521077",
    appId: "1:594324521077:web:829daeb084e281b889383c"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }