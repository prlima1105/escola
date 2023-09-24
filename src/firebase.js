import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyACmtBEBdx16cfhdKxt9BXghNyFeu4uoQc",
  authDomain: "proyectobmw-3a1b1.firebaseapp.com",
  databaseURL: "https://proyectobmw-3a1b1.firebaseio.com",
  projectId: "proyectobmw-3a1b1",
  storageBucket: "proyectobmw-3a1b1.appspot.com",
  messagingSenderId: "589504458077"
};
firebase.initializeApp(config);

export default firebase;
