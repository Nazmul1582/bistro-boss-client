// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID
  
  apiKey: "AIzaSyBBIZlu7XVnNbbIB6x3Fz1yEnx63U-dTmI",
  authDomain: "simple-firebase-4c2fe.firebaseapp.com",
  projectId: "simple-firebase-4c2fe",
  storageBucket: "simple-firebase-4c2fe.appspot.com",
  messagingSenderId: "1008130193575",
  appId: "1:1008130193575:web:762cb55b703de27d658382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;