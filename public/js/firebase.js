let firebaseConfig = {
    apiKey: "AIzaSyBlJBmpb-gA-0LtYlLYarMl7sMBTgggAck",
    authDomain: "blogging-website-67484.firebaseapp.com",
    projectId: "blogging-website-67484",
    storageBucket: "blogging-website-67484.appspot.com",
    messagingSenderId: "64759794731",
    appId: "1:64759794731:web:d76b476249af37611cae6e"
};
  
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();