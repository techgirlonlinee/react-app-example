import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUS6DNiuNvd0kY_YmHfupeAz1UyXtb5Ys",
  authDomain: "marketplace-5f515.firebaseapp.com",
  databaseURL: "https://marketplace-5f515.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
