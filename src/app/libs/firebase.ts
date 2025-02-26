import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDZOjJJiLPzNJElI9Qxcr660Aqn6B10JFE",
  authDomain: "career-definer.firebaseapp.com",
  projectId: "career-definer",
  storageBucket: "career-definer.appspot.com",
  messagingSenderId: "152547318843",
  appId: "1:152547318843:web:b8919f8c11ed74a4c8901e",
  measurementId: "G-47G7YFPGNE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app