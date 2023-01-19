import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Configuración de firebase
const firebaseConfig = {
	apiKey: "AIzaSyCAJk2_JBZVhj250-EPeIjtyVtJVVTnoWU",
	authDomain: "react-segunda-entrega.firebaseapp.com",
	projectId: "react-segunda-entrega",
	storageBucket: "react-segunda-entrega.appspot.com",
	messagingSenderId: "893896221499",
	appId: "1:893896221499:web:da93133b3278befcf9cd1e"
};

// Inicializando Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseBD = getFirestore(FirebaseApp);