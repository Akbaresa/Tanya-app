// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYiyAwuwVSyV7UbEraZK6HrsWzM_62W4k",
  authDomain: "tanya-storage.firebaseapp.com",
  projectId: "tanya-storage",
  storageBucket: "tanya-storage.appspot.com",
  messagingSenderId: "768818726166",
  appId: "1:768818726166:web:b9cf31c30791549b9f7c37",
  measurementId: "G-8K2NFV2E37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export { storage }

