import * as firebase from 'firebase';
require('firebase/functions');

export const firebaseConfig = {
  apiKey: "AIzaSyAZOJ-6CiZrr5_CF_ixZ5LETLTTPbGr9t0",
  authDomain: "hotel-reservations-c14dc.firebaseapp.com",
  databaseURL: "https://hotel-reservations-c14dc.firebaseio.com",
  projectId: "hotel-reservations-c14dc",
  storageBucket: "hotel-reservations-c14dc.appspot.com",
  messagingSenderId: "483504556104",
  appId: "1:483504556104:web:099a2fe8bd2e64a415307d",
  measurementId: "G-00BD9Y8E7M"
};

let hotelApp = firebase.initializeApp( firebaseConfig, 'hotelApp' );


export const dataBase = hotelApp.firestore();
export const databaseRealtime = hotelApp.database();
export const mediaStore = hotelApp.storage;
export const authentication = hotelApp.auth();
export const dx =hotelApp;






  // var firebaseConfig = {
  //   apiKey: "AIzaSyAZOJ-6CiZrr5_CF_ixZ5LETLTTPbGr9t0",
  //   authDomain: "hotel-reservations-c14dc.firebaseapp.com",
  //   databaseURL: "https://hotel-reservations-c14dc.firebaseio.com",
  //   projectId: "hotel-reservations-c14dc",
  //   storageBucket: "hotel-reservations-c14dc.appspot.com",
  //   messagingSenderId: "483504556104",
  //   appId: "1:483504556104:web:099a2fe8bd2e64a415307d",
  //   measurementId: "G-00BD9Y8E7M"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
