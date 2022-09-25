import {
	loginWhitEmailPassword,
	logoutFirebase,
	registerUserWithEmailPassword,
	singInWithGoogle
} from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const chekingAutentication = (email, password) => {
	return async dispatch => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignIn = (email, password) => {
	return async dispatch => {
		dispatch(checkingCredentials());
		const result = await singInWithGoogle();
		if (!result.ok) {
			return dispatch(logout(result.errorMessage));
		} else {
			dispatch(login(result));
		}
	};
};

export const startCreatingUserWithEmailPassword = ({
	email,
	password,
	displayName
}) => {
	return async dispatch => {
		dispatch(checkingCredentials());
		const result = await registerUserWithEmailPassword({
			email,
			password,
			displayName
		});
		if (!result.ok) {
			return dispatch(logout(result.errorMessage));
		} else {
			dispatch(login(result));
		}
	};
};

export const startLoginWhithEmailPassword = ({ email, password }) => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const result = await loginWhitEmailPassword({ email, password });

		if (!result.ok) {
			return dispatch(logout(result));
		} else {
			dispatch(login(result));
		}
	};
};

export const startLogout = () => {
	return async dispatch => {
		await logoutFirebase();

		dispatch(logout({}));
	};
};
