import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2N7H4_dBU3Q3Nia8j94ohl3_mxBD9SpM",
  authDomain: "recatcontact.firebaseapp.com",
  projectId: "recatcontact",
  storageBucket: "recatcontact.appspot.com",
  messagingSenderId: "623639322652",
  appId: "1:623639322652:web:21ad28c6491e9df5013fd9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)