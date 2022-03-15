import {initializeApp} from 'firebase/app'
import { getAuth, onAuthStateChanged  } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyABE8CLFY5asAnTr9MRjTCq9LB-eTv7fBk",
	authDomain: "clone-181b3.firebaseapp.com",
	projectId: "clone-181b3",
	storageBucket: "clone-181b3.appspot.com",
	messagingSenderId: "334650338840",
	appId: "1:334650338840:web:b6484c4a2fd70a85601d6d",
	measurementId: "G-F8ZJB37FTF"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth()
const authState = onAuthStateChanged
export { onAuthStateChanged, db, auth, authState }