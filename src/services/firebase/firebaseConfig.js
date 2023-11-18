import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE_S2Sr-q2L4WFMcJWmlF5Yr1rMkBa_3w",
  authDomain: "miecommerceconreactmilton.firebaseapp.com",
  projectId: "miecommerceconreactmilton",
  storageBucket: "miecommerceconreactmilton.appspot.com",
  messagingSenderId: "192262384873",
  appId: "1:192262384873:web:16178b6b7f7a65b9e91478"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)//Objeto usado para realizar referencia a la base de datos