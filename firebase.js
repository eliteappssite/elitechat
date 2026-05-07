// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove,
  get,
  child
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDrp-ppWgECF4A8fFiekfCjzV0kpRwvNNg",
  authDomain: "elitechat-cd6b8.firebaseapp.com",
  projectId: "elitechat-cd6b8",
  storageBucket: "elitechat-cd6b8.firebasestorage.app",
  messagingSenderId: "303278626333",
  appId: "1:303278626333:web:2468067f17b3ad297c18f4",
  measurementId: "G-6108VLKNCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Realtime Database
const database = getDatabase(app);

// Export everything
export {
  database,
  ref,
  push,
  set,
  onValue,
  remove,
  get,
  child
};