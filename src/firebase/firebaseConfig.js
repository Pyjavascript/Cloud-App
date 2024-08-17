import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAWshmE9yZOAqr3I4p0a0soFJ1HhUdj_ds",
    authDomain: "cloud-1b9cd.firebaseapp.com",
    databaseURL: "https://cloud-1b9cd-default-rtdb.firebaseio.com",
    projectId: "cloud-1b9cd",
    storageBucket: "cloud-1b9cd.appspot.com",
    messagingSenderId: "869483613743",
    appId: "1:869483613743:web:5b82e76102a6cbbada80da",
    measurementId: "G-CW3NJVBKC3"
  };

  export const app = initializeApp(firebaseConfig)