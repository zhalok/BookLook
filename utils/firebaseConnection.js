// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCikF78gPD2LULcmYEIMBl7kfcEYeLez2I',
	authDomain: 'booklookfiles.firebaseapp.com',
	projectId: 'booklookfiles',
	storageBucket: 'booklookfiles.appspot.com',
	messagingSenderId: '961008902100',
	appId: '1:961008902100:web:4744fbd432b30003220041',
	measurementId: 'G-CDDYJR9DF7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
