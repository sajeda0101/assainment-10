import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA029iCwRBG9F7BX0h8HJNKE7aAT2JjOkQ",
  authDomain: "education-learning-254f4.firebaseapp.com",
  projectId: "education-learning-254f4",
  storageBucket: "education-learning-254f4.appspot.com",
  messagingSenderId: "472042836963",
  appId: "1:472042836963:web:8d32ee015de965953886d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;