import firebase from "firebase/app";
import "firebase/auth";
import {config} from './config';

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => {
	return auth.signInWithPopup(provider);
};
export const signOut = () => auth.signOut();

export default firebase;