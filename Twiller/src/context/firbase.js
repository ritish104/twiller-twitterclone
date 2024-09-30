
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRPJyGZ8nRfS4oxPeEL2b_Hpa55LOIxnE",
  authDomain: "twiller-24af4.firebaseapp.com",
  projectId: "twiller-24af4",
  storageBucket: "twiller-24af4.appspot.com",
  messagingSenderId: "241548067788",
  appId: "1:241548067788:web:4cd13184253955b5ded369",
  measurementId: "G-8EB6VYFEC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app