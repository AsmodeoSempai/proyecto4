// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABYEFcf6YQeJQsjFt3w6wMUyNSvcTqqmc",
  authDomain: "fb-crud-react-jpa.firebaseapp.com",
  projectId: "fb-crud-react-jpa",
  storageBucket: "fb-crud-react-jpa.appspot.com",
  messagingSenderId: "510436470717",
  appId: "1:510436470717:web:39786db829e64919d56cd4",
  measurementId: "G-1PZ2LCE1HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore ();