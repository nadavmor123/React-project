import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { auth, signOut, signInWithGoogle } from '../../Firebase/firebase.util';
import { GlobalContext } from "../../state/GlobalState";
import './signin.styles.scss';


const SignIn = () => {

	const history = useHistory();
	const { setUser } = useContext(GlobalContext);

	useEffect(() => {
		auth.onAuthStateChanged( user => {
			if(user){
				localStorage.setItem('user', JSON.stringify(user));
				history.push('/home');
			}else{
				localStorage.removeItem('user');
				history.push('/');
			}
		});
	},[]);

	return (
		<div>
			<h1>Please signin with google :)</h1>
			<button onClick={() => {
				signInWithGoogle().then(userCredentials => setUser(userCredentials.user))
			}}>Login</button>
			<button onClick={signOut}>LogOut</button>
		</div>

	);
}

export default SignIn;
