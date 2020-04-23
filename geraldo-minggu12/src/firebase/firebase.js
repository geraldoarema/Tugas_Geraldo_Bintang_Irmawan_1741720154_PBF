import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAqeya32QXJCpt22ir5lI_yFazM3UhzRXM',
  authDomain: 'fir-minggu12.firebaseapp.com',
  databaseURL: 'https://fir-minggu12.firebaseio.com',
  projectId: 'fir-minggu12',
  storageBucket: 'fir-minggu12.appspot.com',
  messagingSenderId: '188106678432',
  appId: '1:188106678432:web:b38f06c8b53ef8d44729c5',
  measurementId: 'G-YZ3C35QB1D',
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
