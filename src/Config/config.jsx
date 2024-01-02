// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU1EXDqompvi2W6mOldJFqsS90UVdm-vA",
  authDomain: "medical-complex-67.firebaseapp.com",
  projectId: "medical-complex-67",
  storageBucket: "medical-complex-67.appspot.com",
  messagingSenderId: "853772758675",
  appId: "1:853772758675:web:65ccacfcb1006e744ae766",
  measurementId: "G-DCVDRFYTX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app)
const firestore=getFirestore(app)


export {app,analytics,auth,firestore}