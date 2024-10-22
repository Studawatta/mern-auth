// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-auth-1a329.firebaseapp.com',
  projectId: 'mern-auth-1a329',
  storageBucket: 'mern-auth-1a329.appspot.com',
  messagingSenderId: '497349678642',
  appId: '1:497349678642:web:bd2fbac95beae3d2cf8e2b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
