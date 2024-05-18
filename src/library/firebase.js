// Import the functions you need from the SDKs you need

import  {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from  'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCORzS8RdOBnNFPnp4miuiD_nywKbSygAk",
  authDomain: "react-chatapp-7dfe3.firebaseapp.com",
  projectId: "react-chatapp-7dfe3",
  storageBucket: "react-chatapp-7dfe3.appspot.com",
  messagingSenderId: "835105743742",
  appId: "1:835105743742:web:ef7eb7fe6d3590f3b7092f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
const storage = getStorage()

export{auth, db, storage, app}