// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBenqYpgBRs8lyBtA1c0CZp0e32fsMY6Ho",
  authDomain: "ntut-web-by-alex-001-38c3c.firebaseapp.com",
  projectId: "ntut-web-by-alex-001-38c3c",
  storageBucket: "ntut-web-by-alex-001-38c3c.appspot.com",
  messagingSenderId: "285867029274",
  appId: "1:285867029274:web:db93b505375af507e432a3",
  measurementId: "G-CCXQ9S4K1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);