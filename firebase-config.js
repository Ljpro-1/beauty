import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBrCXM1hVsvQPXI0eyCpuKdmpFl1WNFIZI",
    authDomain: "beaut-c8fa8.firebaseapp.com",
    databaseURL: "https://beaut-c8fa8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "beaut-c8fa8",
    storageBucket: "beaut-c8fa8.firebasestorage.app",
    messagingSenderId: "10368579904",
    appId: "1:10368579904:web:61f30b8797553748a762a5"
  };
  


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {
  database,
  ref,
  set,
  push,
  onValue,
  remove,
  update
};
