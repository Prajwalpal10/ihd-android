// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_LlKOpGn7LtKd16WfiCxma_MyNMvgl9I",
  authDomain: "insighthomedecore.firebaseapp.com",
  projectId: "insighthomedecore",
  storageBucket: "insighthomedecore.appspot.com",
  messagingSenderId: "301538197897",
  appId: "1:301538197897:web:e0716e40637c5755352158",
  measurementId: "G-CVXEHDVP2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);