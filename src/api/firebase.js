// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAOWvzzQyNFV6kMTnObB1RnPsambT473cE',
	authDomain: 'bootcamp1-8619c.firebaseapp.com',
	projectId: 'bootcamp1-8619c',
	storageBucket: 'bootcamp1-8619c.appspot.com',
	messagingSenderId: '761788817814',
	appId: '1:761788817814:web:130cc8c5e178bee3cdfdb7',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export default app;
export { db };
