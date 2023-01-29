import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: "mv-school.firebaseapp.com",
	databaseURL: "https://mv-school-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "mv-school",
	storageBucket: "mv-school.appspot.com",
	messagingSenderId: "86299813355",
	appId: "1:86299813355:web:b6067b680f4d05134f25ae",
	measurementId: "G-TDS3REG4QP"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);