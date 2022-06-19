// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTft1z9XAOWLvPh35g9BeK-CaXPv2JoP4",
  authDomain: "fir-test-42f48.firebaseapp.com",
  projectId: "fir-test-42f48",
  storageBucket: "fir-test-42f48.appspot.com",
  messagingSenderId: "1073756500701",
  appId: "1:1073756500701:web:f840a69b1c52001a9c2134",
  measurementId: "G-45KF5BGL4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
