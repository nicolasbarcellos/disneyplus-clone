import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB67KwNOWS1NojHOyLt2ebwHYouO_PBst8",
  authDomain: "disney-clone-4bd07.firebaseapp.com",
  projectId: "disney-clone-4bd07",
  storageBucket: "disney-clone-4bd07.appspot.com",
  messagingSenderId: "169589171687",
  appId: "1:169589171687:web:c3419d29fdad8f084ac942",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
