import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDAz5YBbItV7mE4nxlgkVX1HozvCIZarXM",
  authDomain: "slack-overflow-d65d3.firebaseapp.com",
  projectId: "slack-overflow-d65d3",
  storageBucket: "slack-overflow-d65d3.appspot.com",
  messagingSenderId: "653827201429",
  appId: "1:653827201429:web:cc9035a501a78fc559fe9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);