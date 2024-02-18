// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsyy8FEGP_1xaPh5nmV0fBNrup5zYCIcM",
  authDomain: "todo-list-deo-rego.firebaseapp.com",
  projectId: "todo-list-deo-rego",
  storageBucket: "todo-list-deo-rego.appspot.com",
  messagingSenderId: "658414163866",
  appId: "1:658414163866:web:1fa53ca8b1a5069fc58c23",
  measurementId: "G-2D2W7EVYHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);