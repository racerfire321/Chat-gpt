import { getAnalytics } from "firebase/analytics";
import {getApp ,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDHkF-86VPnjtaEz6qS_Vj90r3Z6hbWP4Y",
  authDomain: "chat-gpt-3a5c0.firebaseapp.com",
  projectId: "chat-gpt-3a5c0",
  storageBucket: "chat-gpt-3a5c0.appspot.com",
  messagingSenderId: "987261752095",
  appId: "1:987261752095:web:ff543cb153246951ecd62a",
  measurementId: "G-693WPDREHJ"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};