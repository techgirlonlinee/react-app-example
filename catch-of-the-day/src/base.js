import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgD4oyVRaCUn2-CeGZC7wQVBzwRNrxNBA",
  authDomain: "marketplace-bf24e.firebaseapp.com",
  databaseURL: "https://marketplace-bf24e.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
