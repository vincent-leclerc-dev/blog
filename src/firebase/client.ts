import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDEp30_JSakMgJUzlOrG85Qes5b5iwwH7o',
  authDomain: 'blog-2c762.firebaseapp.com',
  projectId: 'blog-2c762',
  storageBucket: 'blog-2c762.appspot.com',
  messagingSenderId: '1059991886319',
  appId: '1:1059991886319:web:6565e2e25106646fd27e1a',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
