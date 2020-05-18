import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXzy1d4m3WTHVmwhGjH8wyYC3flufZAKM",
  authDomain: "proyectocomidauy-8d207.firebaseapp.com",
  databaseURL: "https://proyectocomidauy-8d207.firebaseio.com",
  projectId: "proyectocomidauy-8d207",
  storageBucket: "proyectocomidauy-8d207.appspot.com",
  messagingSenderId: "216509994595",
  appId: "1:216509994595:web:766971d1d628360b9b0a56",
  measurementId: "G-JJSW7DXZY7"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
