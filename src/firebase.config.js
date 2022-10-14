// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPtJohJCnorkhoh67DewYFdd7kFi1uyxI',
  authDomain: 'house-marketplace-app-8e169.firebaseapp.com',
  projectId: 'house-marketplace-app-8e169',
  storageBucket: 'house-marketplace-app-8e169.appspot.com',
  messagingSenderId: '468083326361',
  appId: '1:468083326361:web:21685d5c113f655a322708',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
