import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGeHy-sf3khSTp4Yi4RPIJrMXvjIJQ6Ko",
  authDomain: "disabato-ecommerce.firebaseapp.com",
  projectId: "disabato-ecommerce",
  storageBucket: "disabato-ecommerce.appspot.com",
  messagingSenderId: "525661694374",
  appId: "1:525661694374:web:159833c970020600ef4767"
};

// Initialize Firebase
initializeApp(firebaseConfig);

=======
>>>>>>> 841f5d4944b8c436fa014e1989a377caef5a4ba5
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
